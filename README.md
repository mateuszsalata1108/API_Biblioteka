# API Biblioteka

## Krótki opis
API biblioteki umożliwiające:
<ul> 
  <li> pobieranie danych książek,
  <li> modyfikowanie danych książek,
  <li> dodawanie nowych pozycji,
  <li> usuwanie niepotrzebnych pozycji z bazy danych
</ul>

## Pobieranie danych
Do pobrania danych należy:
<ol>
  <li> Utworzyć konto użytkownika, ścieżka: (user/register), podając imię, mail oraz hasło w pliku JSON, 
  <li> Zalogować się, ścieżka: (user/login)
  <li> Pobrać token uwierzytelnijący (unikalny dla każdego profilu) aby uzyskać dostęp do bazy książek, ścieżka: (/books).
</ol>

W celu uruchomienia należy utworzyć plik .env oraz podać string DB_CONNECT w celu połączenia z bazą danych.

## Technologia i uruchomienie

Logowanie użytkowników jest walidowane pod kątem odpowiednich parametrów podawanych podczas tworzenia konta, jak i przy logowaniu. Hasło przechowywane w bazie danych jest zaszyfrowane. Token uwierzytelniający jest generowany dla nowego użytkownika, bez niego nie uzyskamy dostępu do bazy danych z książkami.

W celu instalacji bibliotek należy pobrać:
$ npm install
Zastosowane w aplikacji:

    "@hapi/joi": "^15.0.3",
    "bcryptjs": "^2.4.3",
    "body-parser": "^1.19.0",
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^5.11.12",
    "morgan": "^1.10.0", 
    "nodemon": "^2.0.6" 
    
## Przykłady działania
 ![Rejestracja](https://github.com/PatrykPawlowicz/API_bookstore/blob/main/screenshots/Zrzut%20ekranu%20(7).png)
 Utworzenie nwego użytkownika - hasło zaszyfrowane
 <br/>
 
 
 ![Rejestracja](https://github.com/PatrykPawlowicz/API_bookstore/blob/main/screenshots/Zrzut%20ekranu%20(8).png)
 Walidacja hasła
 <br/>
 
 
 ![Rejestracja](https://github.com/PatrykPawlowicz/API_bookstore/blob/main/screenshots/Zrzut%20ekranu%20(9).png)
 Walidacja maila
 <br/>
 
 
 ![Logowanie](https://github.com/PatrykPawlowicz/API_bookstore/blob/main/screenshots/Zrzut%20ekranu%20(15).png)
 Zalogowano i otrzymano token
 <br/>
 
 
 ![Lista książek](https://github.com/PatrykPawlowicz/API_bookstore/blob/main/screenshots/Zrzut%20ekranu%20(11).png)
 Lista książek
 <br/>
 
 
 ![Dodawanie książki](https://github.com/PatrykPawlowicz/API_bookstore/blob/main/screenshots/Zrzut%20ekranu%20(13).png)
 Dodawanie książki
 <br/>
 
 
 ![Zaktualizowana lista książek](https://github.com/PatrykPawlowicz/API_bookstore/blob/main/screenshots/Zrzut%20ekranu%20(14).png)
 Zaktualizowana lista książek
 <br/>
 
 
 ![Wyszukiwanie ksiązki po ID](https://github.com/PatrykPawlowicz/API_bookstore/blob/main/screenshots/Zrzut%20ekranu%20(12).png)
 Wyszukiwanie ksiazki po ID
 <br/>
