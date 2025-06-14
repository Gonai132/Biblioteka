🇵🇱 Polski
Studencka aplikacja do zarządzania biblioteką (React + Spring Boot)

To projekt studencki zrealizowany w ramach zajęć na uczelni.
Aplikacja umożliwia przeglądanie książek, ich zwracanie oraz wysyłanie wiadomości kontaktowych do zespołu biblioteki.

Użyte technologie:
Front-end: React.js, Bootstrap 5, Framer Motion

Back-end: Spring Boot (Java), REST API

Baza danych: MySQL

Narzędzia: Visual Studio Code, IntelliJ IDEA, Postman, phpMyAdmin

▶️ Jak uruchomić projekt lokalnie
Wymagania:
Node.js i npm

Java 17+ oraz Maven

MySQL lub MariaDB

IDE (np. VS Code dla frontendu, IntelliJ dla backendu)

Back-end (Spring Boot):
Sklonuj projekt i otwórz folder backendu w IntelliJ.

Upewnij się, że MySQL działa i baza danych została utworzona (np. library_db).

Skonfiguruj application.properties lub application.yml z danymi do logowania do bazy.

Uruchom aplikację przez klasę DemoApplication.java.

API będzie dostępne pod adresem http://localhost:8081/api.

Front-end (React):
Otwórz folder aplikacji React w VS Code.

Wpisz npm install, aby zainstalować zależności.

Uruchom serwer deweloperski poleceniem npm start.

Aplikacja powinna działać pod http://localhost:3000.

Testowanie:
Użyj Postmana lub otwórz /api/books, /api/contact itd. w przeglądarce lub z poziomu frontendu.


English
Student Library Management App (React + Spring Boot)
This is a student project built as part of a web development course.
It is a simple library management system where users can browse books, return them, and send contact messages to the library team.

Technologies used:
Front-end: React.js, Bootstrap 5, Framer Motion

Back-end: Spring Boot (Java), REST API

Database: MySQL

Tools: Visual Studio Code, IntelliJ IDEA, Postman, phpMyAdmin


▶️ How to run the project locally
Requirements:
Node.js and npm

Java 17+ and Maven

MySQL or MariaDB

IDEs (e.g., VS Code for frontend, IntelliJ for backend)

Back-end (Spring Boot):
Clone the project and open the back-end folder in IntelliJ.

Make sure MySQL is running and the database is created (e.g., library_db).

Configure application.properties or application.yml with your DB credentials.

Run the application with DemoApplication.java.

The API will be available at http://localhost:8081/api.

Front-end (React):
Open the React app folder in VS Code.

Run npm install to install dependencies.

Start the development server with npm start.

The app should run at http://localhost:3000.

Test endpoints:
Use Postman or open /api/books, /api/contact, etc., in the browser or frontend.

