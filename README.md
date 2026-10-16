# Projekty Angular

Zbiór siedmiu niezależnych projektów Angular. Każdy projekt znajduje się w osobnym folderze i ma własne pliki źródłowe, konfigurację oraz zależności.

## Projekty

| Nr | Folder projektu |
| --- | --- |
| 1 | [project001-hello](./project001-hello/) |
| 2 | [projekt002-tesla](./projekt002-tesla/) |
| 3 | [003-formulaz](./003-formulaz/) |
| 4 | [004-formZamo](./004-formZamo/) |
| 5 | [005-bootstrap](./005-bootstrap/) |
| 6 | [006-routing](./006-routing/) |
| 7 | [007-tablice](./007-tablice/) |

## Uruchomienie wybranego projektu

Zainstaluj Node.js i npm w wersji zgodnej z zależnościami danego projektu. Otwórz terminal w wybranym folderze, np.:

```sh
cd 006-routing
npm ci
npm start
```

Po uruchomieniu otwórz adres podany w terminalu, domyślnie `http://localhost:4200/`. Aby uruchomić inny projekt, przejdź do jego folderu i wykonaj te same polecenia. Przy jednoczesnym uruchamianiu kilku projektów wybierz inny port, np. `npm start -- --port 4201`.

## Budowanie

W folderze wybranego projektu uruchom:

```sh
npm run build
```

Foldery `node_modules`, `dist` i `.angular` są generowane lokalnie i pomijane w repozytorium. Pliki `package-lock.json` są dołączone, aby zachować wersje zależności.
