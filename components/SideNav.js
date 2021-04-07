import styles from '../styles/Dropdown.module.css'

const SideNavbar = () => {
  return (
    <div className="dropend p-2 d-grid">
    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1"
            data-bs-toggle="dropdown" aria-expanded="false">
        Lab 1
    </button>
    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
        <li>
            <a className="dropdown-item" href="Lab1.html">Загальна сторінка</a>
        </li>
        <li className={styles.dropdown-submenu}>
            <a className="dropdown-item" href="Lab1_1_1.html">Характеристика об’єкта
                автоматизації</a>
            <ul className="dropdown-menu">
                <li><a tabIndex="-1" href="Lab1_1_1.html" className="dropdown-item">1.1. Детальний опис
                    предметного
                    середовища</a></li>
                <li><a href="Lab1_1_2.html" className="dropdown-item">1.2. Мета розробки проекту</a>
                </li>
                <li><a href="Lab1_1_3.html" className="dropdown-item">1.3. Бізнес-задачі</a></li>
                <li><a href="Lab1_1_4.html" className="dropdown-item">1.4. Бізнес-процеси</a></li>
                <li><a href="Lab1_1_5.html" className="dropdown-item">1.5. Сценарій дій системи</a></li>
            </ul>
        </li>
        <li className={styles.dropdown-submenu}>
            <a className="dropdown-item" href="Lab1_2_1.html">ООД
                предметного середовища</a>
            <ul className="dropdown-menu">
                <li><a tabIndex="-1" href="Lab1_2_1.html" className="dropdown-item">2.1. Аналіз опису
                    об’єкту
                    управління</a></li>
                <li><a href="Lab1_2_2.html" className="dropdown-item">2.2. ООД предметного
                    середовища</a></li>
                <li><a href="Lab1_2_3.html" className="dropdown-item">2.3. Функціональні вимоги
                    замовника</a></li>
            </ul>
        </li>
        <li className={styles.dropdown-submenu}>
            <a className="dropdown-item" href="Lab1_3_1.html">Проектування ПЗ</a>
            <ul className="dropdown-menu">
                <li><a tabIndex="-1" href="Lab1_3_1.html" className="dropdown-item">3.1. Проектування
                    структури
                    ПЗ</a></li>
            </ul>
        </li>
        <li className={styles.dropdown-submenu}>
            <a className="dropdown-item" href="Lab1_4_1.html">Кодування (програмування)</a>
            <ul className="dropdown-menu">
                <li><a tabIndex="-1" href="Lab1_4_1.html" className="dropdown-item">4.1 Файлова
                    структура
                    проекту</a></li>
                <li><a tabIndex="-1" href="Lab1_4_2.html" className="dropdown-item">4.2 Специфікації
                    методів у
                    вигляді таблиці</a></li>
            </ul>
        </li>
        <li className={styles.dropdown-submenu}>
            <a className="dropdown-item" href="Lab1_5_1.html">Впровадження та супроводження ПЗ</a>
            <ul className="dropdown-menu">
                <li><a tabIndex="-1" href="Lab1_5_1.html" className="dropdown-item">5.1. Посилання на
                    папку з
                    проектом</a></li>
                <li><a tabIndex="-1" href="Lab1_5_2.html" className="dropdown-item">5.2. Запуск
                    ехе-файла</a></li>
            </ul>
        </li>
    </ul>
    <button className="btn btn-primary dropdown-toggle mt-2" type="button"
            data-bs-toggle="dropdown" aria-expanded="false">
        Lab 2
    </button>
    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
        <li>
            <a className="dropdown-item" href="Lab2.html">Загальна сторінка</a>
        </li>
        <li>
            <a className="dropdown-item" href="Lab2_1_1.html">Тема, мета та постановка задачі ЛР №2</a>
        </li>
        <li className={styles.dropdown-submenu}>
            <a className="dropdown-item" href="Lab2_2_1.html">Проектування структури ПЗ</a>
            <ul className="dropdown-menu">
                <li><a tabIndex="-1" href="Lab2_2_1.html" className="dropdown-item">2.1. Таблиця
                    класів</a></li>
                <li><a href="Lab2_2_2.html" className="dropdown-item">2.2. UML - діаграма класів</a>
                </li>
            </ul>
        </li>
        <li className={styles.dropdown-submenu}>
            <a className="dropdown-item" href="Lab2_3_1.html">Кодування ПЗ</a>
            <ul className="dropdown-menu">
                <li><a tabIndex="-1" href="Lab2_3_1.html" className="dropdown-item">3.1. Файлова
                    структура проекту</a></li>
                <li><a tabIndex="-1" href="Lab2_3_2.html" className="dropdown-item">3.2. Програмні коди
                    класів</a></li>
                <li><a tabIndex="-1" href="Lab2_3_3.html" className="dropdown-item">3.3. Програмний код
                    класу Program</a></li>
            </ul>
        </li>
        <li className={styles.dropdown-submenu}>
            <a className="dropdown-item" href="Lab2_4_1.html">Впровадження та супроводження ПЗ</a>
            <ul className="dropdown-menu">
                <li><a tabIndex="-1" href="Lab2_4_1.html" className="dropdown-item">4.1 Папка з
                    проектом</a></li>
                <li><a tabIndex="-1" href="Lab2_4_2.html" className="dropdown-item">4.2 Запуск .exe
                    файлу</a></li>
            </ul>
        </li>
        <li>
            <a className="dropdown-item" href="Lab2_5_1.html">Висновки</a>
        </li>
    </ul>
    <button className="btn btn-primary dropdown-toggle mt-2" type="button"
            data-bs-toggle="dropdown" aria-expanded="false">
        Lab 3
    </button>
    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
        <li>
            <a className="dropdown-item" href="Lab3.html">Загальна сторінка</a>
        </li>
        <li>
            <a className="dropdown-item" href="Lab3_1_1.html">Тема, мета та постановка задачі ЛР №3</a>
        </li>
        <li>
            <a className="dropdown-item" href="Lab3_2_1.html">Місце розташування проекту.
                Середовище розробки</a>
        </li>
        <li>
            <a className="dropdown-item" href="Lab3_3_1.html">Класи з описом властивостей для
                закритих полів</a>
        </li>
        <li className={styles.dropdown-submenu}>
            <a className="dropdown-item" href="Lab3_4_1.html">Проектування структури
                ПЗ</a>
            <ul className="dropdown-menu">
                <li><a tabIndex="-1" href="Lab3_4_1.html" className="dropdown-item">4.1 UML -
                    діаграма класів</a></li>
            </ul>
        </li>
        <li className={styles.dropdown-submenu}>
            <a className="dropdown-item" href="Lab3_5_1.html">Кодування ПЗ (програмування)</a>
            <ul className="dropdown-menu">
                <li><a tabIndex="-1" href="Lab3_5_1.html" className="dropdown-item">5.1 Файлова
                    структура проекту</a></li>
                <li><a tabIndex="-1" href="Lab3_5_2.html" className="dropdown-item">5.2 Програмний
                    код всіх файлів. Результат виконання програми.</a></li>
            </ul>
        </li>
        <li className={styles.dropdown-submenu}>
            <a className="dropdown-item" href="Lab3_6_1.html">Впровадження та супроводження ПЗ</a>
            <ul className="dropdown-menu">
                <li><a tabIndex="-1" href="Lab3_6_1.html" className="dropdown-item">6.1 Папка з
                    проектом</a></li>
                <li><a tabIndex="-1" href="Lab3_6_2.html" className="dropdown-item">6.2 Запуск .exe
                    файлу</a></li>
            </ul>
        </li>
        <li>
            <a className="dropdown-item" href="Lab3_7_1.html">Висновки</a>
        </li>
    </ul>
    <button className="btn btn-primary dropdown-toggle mt-2" type="button"
            data-bs-toggle="dropdown" aria-expanded="false">
        Lab 4
    </button>
    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
        <li>
            <a className="dropdown-item" href="Lab4.html">Загальна сторінка</a>
        </li>
        <li>
            <a className="dropdown-item" href="Lab4_1_1.html">Тема, мета та постановка задачі ЛР №4</a>
        </li>
        <li>
            <a className="dropdown-item" href="Lab4_2_1.html">Місце розташування проекту.
                Середовище розробки</a>
        </li>
        <li>
            <a className="dropdown-item" href="Lab4_3_1.html">Проектування стурктури ПЗ</a>
            <ul className="dropdown-menu">
                <li><a tabIndex="-1" href="Lab4_3_1.html" className="dropdown-item">3.1 UML -
                    діаграма класів</a></li>
            </ul>
        </li>
        <li className={styles.dropdown-submenu}>
            <a className="dropdown-item" href="Lab4_4_1.html">Кодування ПЗ (програмування)</a>
            <ul className="dropdown-menu">
                <li><a tabIndex="-1" href="Lab4_4_1.html" className="dropdown-item">4.1 Перевантаження
                    унарних операторів</a></li>
                <li><a tabIndex="-1" href="Lab4_4_2.html" className="dropdown-item">4.2 Перевантаження
                    унарних операторів</a></li>
                <li><a tabIndex="-1" href="Lab4_4_3.html" className="dropdown-item">4.3 Перевантаження
                    логічних операторів</a></li>
                <li><a tabIndex="-1" href="Lab4_4_4.html" className="dropdown-item">4.4 Файлова
                    структура проекту</a></li>
            </ul>
        </li>
        <li className={styles.dropdown-submenu}>
            <a className="dropdown-item" href="Lab4_5_1.html">Впровадження та супроводження ПЗ</a>
            <ul className="dropdown-menu">
                <li><a tabIndex="-1" href="Lab4_5_1.html" className="dropdown-item">5.1 Папка з
                    проектом</a></li>
                <li><a tabIndex="-1" href="Lab4_5_2.html" className="dropdown-item">5.2 Запуск .exe
                    файлу</a></li>
            </ul>
        </li>
        <li className={styles.dropdown-submenu}>
            <a className="dropdown-item" href="Lab4_6_1.html">Висновки</a>
        </li>
    </ul>
    <button className="btn btn-primary dropdown-toggle mt-2" type="button"
            data-bs-toggle="dropdown" aria-expanded="false">
        Lab 5
    </button>
    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
        <li className={styles.dropdown-submenu}>
            <a className="dropdown-item" href="Lab1_1_1.html">Характеристика об’єкта
                автоматизації</a>
            <ul className="dropdown-menu">
                <li><a tabIndex="-1" href="Lab1_1_1.html" className="dropdown-item">1.1. Детальний опис
                    предметного
                    середовища</a></li>
                <li><a href="Lab1_1_2.html" className="dropdown-item">1.2. Мета розробки проекту</a>
                </li>
                <li><a href="Lab1_1_3.html" className="dropdown-item">1.3. Бізнес-задачі</a></li>
                <li><a href="Lab1_1_4.html" className="dropdown-item">1.4. Бізнес-процеси</a></li>
                <li><a href="Lab1_1_5.html" className="dropdown-item">1.5. Сценарій дій системи</a></li>
            </ul>
        </li>
        <li className={styles.dropdown-submenu}>
            <a className="dropdown-item" href="Lab1_2_1.html">ООД
                предметного середовища</a>
            <ul className="dropdown-menu">
                <li><a tabIndex="-1" href="Lab1_2_1.html" className="dropdown-item">2.1. Аналіз опису
                    об’єкту
                    управління</a></li>
                <li><a href="Lab1_2_2.html" className="dropdown-item">2.2. ООД предметного
                    середовища</a></li>
                <li><a href="Lab1_2_3.html" className="dropdown-item">2.3. Функціональні вимоги
                    замовника</a></li>
            </ul>
        </li>
        <li className={styles.dropdown-submenu}>
            <a className="dropdown-item" href="Lab1_3_1.html">Проектування ПЗ</a>
            <ul className="dropdown-menu">
                <li><a tabIndex="-1" href="Lab1_3_1.html" className="dropdown-item">3.1. Проектування
                    структури
                    ПЗ</a></li>
            </ul>
        </li>
        <li className={styles.dropdown-submenu}>
            <a className="dropdown-item" href="Lab1_4_1.html">Кодування (програмування)</a>
            <ul className="dropdown-menu">
                <li><a tabIndex="-1" href="Lab1_4_1.html" className="dropdown-item">4.1 Файлова
                    структура
                    проекту</a></li>
                <li><a tabIndex="-1" href="Lab1_4_2.html" className="dropdown-item">4.2 Специфікації
                    методів у
                    вигляді таблиці</a></li>
            </ul>
        </li>
        <li className={styles.dropdown-submenu}>
            <a className="dropdown-item" href="Lab1_5_1.html">Впровадження та супроводження ПЗ</a>
            <ul className="dropdown-menu">
                <li><a tabIndex="-1" href="Lab1_5_1.html" className="dropdown-item">5.1. Посилання на
                    папку з
                    проектом</a></li>
                <li><a tabIndex="-1" href="Lab1_5_2.html" className="dropdown-item">5.2. Запуск
                    ехе-файла</a></li>
            </ul>
        </li>
    </ul>
    <button className="btn btn-primary dropdown-toggle mt-2" type="button"
            data-bs-toggle="dropdown" aria-expanded="false">
        Lab 6
    </button>
    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
        <li className={styles.dropdown-submenu}>
            <a className="dropdown-item" href="Lab1_1_1.html">Характеристика об’єкта
                автоматизації</a>
            <ul className="dropdown-menu">
                <li><a tabIndex="-1" href="Lab1_1_1.html" className="dropdown-item">1.1. Детальний опис
                    предметного
                    середовища</a></li>
                <li><a href="Lab1_1_2.html" className="dropdown-item">1.2. Мета розробки проекту</a>
                </li>
                <li><a href="Lab1_1_3.html" className="dropdown-item">1.3. Бізнес-задачі</a></li>
                <li><a href="Lab1_1_4.html" className="dropdown-item">1.4. Бізнес-процеси</a></li>
                <li><a href="Lab1_1_5.html" className="dropdown-item">1.5. Сценарій дій системи</a></li>
            </ul>
        </li>
        <li className={styles.dropdown-submenu}>
            <a className="dropdown-item" href="Lab1_2_1.html">ООД
                предметного середовища</a>
            <ul className="dropdown-menu">
                <li><a tabIndex="-1" href="Lab1_2_1.html" className="dropdown-item">2.1. Аналіз опису
                    об’єкту
                    управління</a></li>
                <li><a href="Lab1_2_2.html" className="dropdown-item">2.2. ООД предметного
                    середовища</a></li>
                <li><a href="Lab1_2_3.html" className="dropdown-item">2.3. Функціональні вимоги
                    замовника</a></li>
            </ul>
        </li>
        <li className={styles.dropdown-submenu}>
            <a className="dropdown-item" href="Lab1_3_1.html">Проектування ПЗ</a>
            <ul className="dropdown-menu">
                <li><a tabIndex="-1" href="Lab1_3_1.html" className="dropdown-item">3.1. Проектування
                    структури
                    ПЗ</a></li>
            </ul>
        </li>
        <li className={styles.dropdown-submenu}>
            <a className="dropdown-item" href="Lab1_4_1.html">Кодування (програмування)</a>
            <ul className="dropdown-menu">
                <li><a tabIndex="-1" href="Lab1_4_1.html" className="dropdown-item">4.1 Файлова
                    структура
                    проекту</a></li>
                <li><a tabIndex="-1" href="Lab1_4_2.html" className="dropdown-item">4.2 Специфікації
                    методів у
                    вигляді таблиці</a></li>
            </ul>
        </li>
        <li className={styles.dropdown-submenu}>
            <a className="dropdown-item" href="Lab1_5_1.html">Впровадження та супроводження ПЗ</a>
            <ul className="dropdown-menu">
                <li><a tabIndex="-1" href="Lab1_5_1.html" className="dropdown-item">5.1. Посилання на
                    папку з
                    проектом</a></li>
                <li><a tabIndex="-1" href="Lab1_5_2.html" className="dropdown-item">5.2. Запуск
                    ехе-файла</a></li>
            </ul>
        </li>
    </ul>
    <button className="btn btn-primary dropdown-toggle mt-2" type="button"
            data-bs-toggle="dropdown" aria-expanded="false">
        Lab 7
    </button>
    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
        <li className={styles.dropdown-submenu}>
            <a className="dropdown-item" href="Lab1_1_1.html">Характеристика об’єкта
                автоматизації</a>
            <ul className="dropdown-menu">
                <li><a tabIndex="-1" href="Lab1_1_1.html" className="dropdown-item">1.1. Детальний опис
                    предметного
                    середовища</a></li>
                <li><a href="Lab1_1_2.html" className="dropdown-item">1.2. Мета розробки проекту</a>
                </li>
                <li><a href="Lab1_1_3.html" className="dropdown-item">1.3. Бізнес-задачі</a></li>
                <li><a href="Lab1_1_4.html" className="dropdown-item">1.4. Бізнес-процеси</a></li>
                <li><a href="Lab1_1_5.html" className="dropdown-item">1.5. Сценарій дій системи</a></li>
            </ul>
        </li>
        <li className={styles.dropdown-submenu}>
            <a className="dropdown-item" href="Lab1_2_1.html">ООД
                предметного середовища</a>
            <ul className="dropdown-menu">
                <li><a tabIndex="-1" href="Lab1_2_1.html" className="dropdown-item">2.1. Аналіз опису
                    об’єкту
                    управління</a></li>
                <li><a href="Lab1_2_2.html" className="dropdown-item">2.2. ООД предметного
                    середовища</a></li>
                <li><a href="Lab1_2_3.html" className="dropdown-item">2.3. Функціональні вимоги
                    замовника</a></li>
            </ul>
        </li>
        <li className={styles.dropdown-submenu}>
            <a className="dropdown-item" href="Lab1_3_1.html">Проектування ПЗ</a>
            <ul className="dropdown-menu">
                <li><a tabIndex="-1" href="Lab1_3_1.html" className="dropdown-item">3.1. Проектування
                    структури
                    ПЗ</a></li>
            </ul>
        </li>
        <li className={styles.dropdown-submenu}>
            <a className="dropdown-item" href="Lab1_4_1.html">Кодування (програмування)</a>
            <ul className="dropdown-menu">
                <li><a tabIndex="-1" href="Lab1_4_1.html" className="dropdown-item">4.1 Файлова
                    структура
                    проекту</a></li>
                <li><a tabIndex="-1" href="Lab1_4_2.html" className="dropdown-item">4.2 Специфікації
                    методів у
                    вигляді таблиці</a></li>
            </ul>
        </li>
        <li className={styles.dropdown-submenu}>
            <a className="dropdown-item" href="Lab1_5_1.html">Впровадження та супроводження ПЗ</a>
            <ul className="dropdown-menu">
                <li><a tabIndex="-1" href="Lab1_5_1.html" className="dropdown-item">5.1. Посилання на
                    папку з
                    проектом</a></li>
                <li><a tabIndex="-1" href="Lab1_5_2.html" className="dropdown-item">5.2. Запуск
                    ехе-файла</a></li>
            </ul>
        </li>
    </ul>
    <button className="btn btn-primary dropdown-toggle mt-2" type="button"
            data-bs-toggle="dropdown" aria-expanded="false">
        Lab 8
    </button>
    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
        <li className={styles.dropdown-submenu}>
            <a className="dropdown-item" href="Lab1_1_1.html">Характеристика об’єкта
                автоматизації</a>
            <ul className="dropdown-menu">
                <li><a tabIndex="-1" href="Lab1_1_1.html" className="dropdown-item">1.1. Детальний опис
                    предметного
                    середовища</a></li>
                <li><a href="Lab1_1_2.html" className="dropdown-item">1.2. Мета розробки проекту</a>
                </li>
                <li><a href="Lab1_1_3.html" className="dropdown-item">1.3. Бізнес-задачі</a></li>
                <li><a href="Lab1_1_4.html" className="dropdown-item">1.4. Бізнес-процеси</a></li>
                <li><a href="Lab1_1_5.html" className="dropdown-item">1.5. Сценарій дій системи</a></li>
            </ul>
        </li>
        <li className={styles.dropdown-submenu}>
            <a className="dropdown-item" href="Lab1_2_1.html">ООД
                предметного середовища</a>
            <ul className="dropdown-menu">
                <li><a tabIndex="-1" href="Lab1_2_1.html" className="dropdown-item">2.1. Аналіз опису
                    об’єкту
                    управління</a></li>
                <li><a href="Lab1_2_2.html" className="dropdown-item">2.2. ООД предметного
                    середовища</a></li>
                <li><a href="Lab1_2_3.html" className="dropdown-item">2.3. Функціональні вимоги
                    замовника</a></li>
            </ul>
        </li>
        <li className={styles.dropdown-submenu}>
            <a className="dropdown-item" href="Lab1_3_1.html">Проектування ПЗ</a>
            <ul className="dropdown-menu">
                <li><a tabIndex="-1" href="Lab1_3_1.html" className="dropdown-item">3.1. Проектування
                    структури
                    ПЗ</a></li>
            </ul>
        </li>
        <li className={styles.dropdown-submenu}>
            <a className="dropdown-item" href="Lab1_4_1.html">Кодування (програмування)</a>
            <ul className="dropdown-menu">
                <li><a tabIndex="-1" href="Lab1_4_1.html" className="dropdown-item">4.1 Файлова
                    структура
                    проекту</a></li>
                <li><a tabIndex="-1" href="Lab1_4_2.html" className="dropdown-item">4.2 Специфікації
                    методів у
                    вигляді таблиці</a></li>
            </ul>
        </li>
        <li className={styles.dropdown-submenu}>
            <a className="dropdown-item" href="Lab1_5_1.html">Впровадження та супроводження ПЗ</a>
            <ul className="dropdown-menu">
                <li><a tabIndex="-1" href="Lab1_5_1.html" className="dropdown-item">5.1. Посилання на
                    папку з
                    проектом</a></li>
                <li><a tabIndex="-1" href="Lab1_5_2.html" className="dropdown-item">5.2. Запуск
                    ехе-файла</a></li>
            </ul>
        </li>
    </ul>
    <button className="btn btn-primary dropdown-toggle mt-2" type="button"
            data-bs-toggle="dropdown" aria-expanded="false">
        Lab 9
    </button>
    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
        <li className={styles.dropdown-submenu}>
            <a className="dropdown-item" href="Lab1_1_1.html">Характеристика об’єкта
                автоматизації</a>
            <ul className="dropdown-menu">
                <li><a tabIndex="-1" href="Lab1_1_1.html" className="dropdown-item">1.1. Детальний опис
                    предметного
                    середовища</a></li>
                <li><a href="Lab1_1_2.html" className="dropdown-item">1.2. Мета розробки проекту</a>
                </li>
                <li><a href="Lab1_1_3.html" className="dropdown-item">1.3. Бізнес-задачі</a></li>
                <li><a href="Lab1_1_4.html" className="dropdown-item">1.4. Бізнес-процеси</a></li>
                <li><a href="Lab1_1_5.html" className="dropdown-item">1.5. Сценарій дій системи</a></li>
            </ul>
        </li>
        <li className={styles.dropdown-submenu}>
            <a className="dropdown-item" href="Lab1_2_1.html">ООД
                предметного середовища</a>
            <ul className="dropdown-menu">
                <li><a tabIndex="-1" href="Lab1_2_1.html" className="dropdown-item">2.1. Аналіз опису
                    об’єкту
                    управління</a></li>
                <li><a href="Lab1_2_2.html" className="dropdown-item">2.2. ООД предметного
                    середовища</a></li>
                <li><a href="Lab1_2_3.html" className="dropdown-item">2.3. Функціональні вимоги
                    замовника</a></li>
            </ul>
        </li>
        <li className={styles.dropdown-submenu}>
            <a className="dropdown-item" href="Lab1_3_1.html">Проектування ПЗ</a>
            <ul className="dropdown-menu">
                <li><a tabIndex="-1" href="Lab1_3_1.html" className="dropdown-item">3.1. Проектування
                    структури
                    ПЗ</a></li>
            </ul>
        </li>
        <li className={styles.dropdown-submenu}>
            <a className="dropdown-item" href="Lab1_4_1.html">Кодування (програмування)</a>
            <ul className="dropdown-menu">
                <li><a tabIndex="-1" href="Lab1_4_1.html" className="dropdown-item">4.1 Файлова
                    структура
                    проекту</a></li>
                <li><a tabIndex="-1" href="Lab1_4_2.html" className="dropdown-item">4.2 Специфікації
                    методів у
                    вигляді таблиці</a></li>
            </ul>
        </li>
        <li className={styles.dropdown-submenu}>
            <a className="dropdown-item" href="Lab1_5_1.html">Впровадження та супроводження ПЗ</a>
            <ul className="dropdown-menu">
                <li><a tabIndex="-1" href="Lab1_5_1.html" className="dropdown-item">5.1. Посилання на
                    папку з
                    проектом</a></li>
                <li><a tabIndex="-1" href="Lab1_5_2.html" className="dropdown-item">5.2. Запуск
                    ехе-файла</a></li>
            </ul>
        </li>
    </ul>
</div>
  )
}

export default SideNavbar
