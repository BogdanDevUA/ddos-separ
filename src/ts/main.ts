/*!
MIT License

Copyright (c) 2022-2023 Yuriy Bogdan
*/

// @ts-nocheck

$(async () => {
	/*
    Кхм. Зарплата прийшла?
    Тоді можеш задонатити на ЗСУ прямо зараз - <https://uahelp.monobank.ua>

    Дякую!
    */

	// Ініціалізація класів
	Panel = new Panel();
	Sword = new Sword();
	Doser = new Doser();

	Panel.button.click(
		/**Старт атаки*/ () => {
			Sounds.click.play();
			Doser.run();
		}
	);

	$('#attacks-section').click(
		/** Загальна кількість атак*/
		() =>
			Swal.fire(
				'Атаки',
				`Взагалом атаковано: ${Database.attacks}`,
				'info'
			)
	);

	if (Device.connection) {
		if (Device.onLine) {
			// Якщо заслабкий інтернет
			if (
				!['3g', '4g', '5g'].includes(Device.connection?.effectiveType)
			) {
				Swal.fire(
					'Зауваження',
					'У вас заслабкий інтернет!\nДля ефективної атаки - підключіться до WI-FI',
					'warning'
				);
			}
		}
	} else Swal.fire('Помилка', 'Немає підключення до інтернету!', 'error');

	$(window).on({
		/**
		 * Гарячі клавіші
		 * @param {KeyboardEvent} e Подія клавіатури (натискання клавіші)
		 */
		keyup(e: KeyboardEvent) {
			switch (e.key) {
				case ('Pause', 'Escape'):
					Doser.stop();
					break;
			}
		},
	});

	// Фішечки

	if (Device.battery) {
		const battery = await Device.battery;

		battery.onlevelchange = function () {
			if (!this.charging) {
				/** Рівень заряду батареї в відсотках */
				const level = this.level * 100;

				switch (level) {
					case (15, 11):
						Swal.fire(
							'Увага!',
							`У вас сідає батарея (залишилось ${level}%)`,
							'warning'
						);
						break;

					case 10:
						/*
						Ми залишаємо 10% Резервного заряду задля того, щоб наша програма не зжирала батарею аж до нуля
						Бо якщо раптом телефон сяде, а тут світло ще вимкнули, так що ось запобіжник
						*/
						Swal.fire(
							'Увага!',
							'Критично низький заряд батареї, атаку буде вимкнуто\n\
                        Просимо поставити телефон на зарядку',

							'warning'
						).then(() => Doser.stop());
						break;
				}
			}
		};
	}

	console.log(
		'%cУВАГА!!!\nНЕ ВСТАВЛЯЙТЕ сюди БУДЬ-ЯКІ КОДИ!, \
ЦИМ МОЖЕ СКОРИСТАТИСЬ ВОРОГ, ПІДМІНИВШИ НАШІ ЦІЛІ НА ВОРОЖІ!\n\n\
Також суворо забороняється вставляти коди навіть від українців, \
нам не можна відходити від курсу IT Армії, нам всім треба працювати разом і не розділятись',

		'font-size: 16px;\
         font-family: system-ui;\
		 background-color: red;\
		 display: block;'
	);

	console.log(
		'%cЯкщо ти розробник - можеш допомогти проекту 😎\n\
https://github.com/BogdanDevUA/ddos-separ\n\n\
Постав зірочку 🌠, подай ідею або зроби пулл-реквест!\n\
Буду дуже вдячний😊!',

		'font-size: 16px;\
         font-family: system-ui;'
	);
});

// Слава Україні!
