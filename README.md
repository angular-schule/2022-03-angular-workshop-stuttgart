<img src="https://assets.angular.schule/header-intensivworkshop.png">

#### **mit Ferdinand Malcher**

<hr>

**Herzlich Willkommen – und schön, dass du dabei bist!**  
In diesem Repository findest du während des Workshops den Quelltext unserer Beispielanwendung.

# ✅ Vorbereitung

Damit wir gleich durchstarten können, solltest Du ein paar Vorbereitungen treffen.  
Die gesamte Installation wird rund 30 Minuten dauern. 

## 1.) Benötigte Software

1. **Node.js 14 oder 16** (aktuelle LTS-Version): [https://nodejs.org](https://nodejs.org)
2. **Google Chrome:** [https://www.google.com/chrome/](https://www.google.com/chrome/)
3. **Visual Studio Code:** [https://code.visualstudio.com](https://code.visualstudio.com)
   + Wir empfehlen dir eine Auswahl an Extensions für Visual Studio Code.  
     Dazu haben wir ein Extension Pack vorbereitet, das alles Nötige einrichtet:  
     [Angular-Schule: Extension Pack](https://marketplace.visualstudio.com/items?itemName=angular-schule.angular-schule-extension-pack)


## 2.) Proxy?

Für die Proxykonfiguration im Unternehmensnetz sind gesonderte Einstellungen nötig.
Wir haben dir hierfür folgende Anleitung erstellt:
https://presentations.angular.schule/PROXY.html  
Sollte es Probleme mit dem Proxy geben, melde Dich bitte bei uns, dann finden wir eine Lösung.


## 3.) Pakete installieren

Die Angular CLI ist das offizielle Build-Tool für Angular. Mit folgendem Befehl kannst Du die CLI auf dem System installieren:

```bash
npm install -g @angular/cli
```

⚠️ Überprüfe bitte anschließend die Versionen, damit wir beim Workshop alle auf dem gleichen Stand sind:

```
node -v
> Erwartet: v14.x oder 16.x

npm -v
> Erwartet: 6.x oder höher

ng version
> Erwartet: 13.x.x oder höher
```


## 4.) Startprojekt installieren

In diesem Repository haben wir bereits ein Angular-Projekt erzeugt.
Bitte lade dir das Repository herunter und installiere das Projekt.
Du kannst den Code entweder [als ZIP herunterladen](https://github.com/angular-schule/2022-03-angular-workshop-stuttgart/archive/refs/heads/main.zip) oder Git verwenden, um das Projekt zu klonen:

```bash
git clone https://github.com/angular-schule/2022-03-angular-workshop-stuttgart.git
```

Wechsle danach zum neuen Ordner und führe den Installationsbefehl aus.
Die Installation kann bei langsamer Internetverbindung sehr lange dauern.
Warte beim Schritt `Installing packages (npm)` mit Geduld ab!

```bash
cd 2022-03-angular-workshop-stuttgart
npm install
```

Anschließend kannst Du das Projekt starten:

```bash
ng serve
```


> Auf http://localhost:4200 sollte nun eine Website mit dem Text *"Hallo Welt"* erscheinen!

## 5.) Historie anschauen

Bitte schaue dir in diesem Repository die Historie der Git-Commits einmal an.
Dort siehst du, mit welchen Befehlen das Projekt erzeugt wurde.


### Wir freuen uns schon! 🙂

Wenn bei allen Teilnehmenden das Grundgerüst steht, können wir ohne Zeitverlust loslegen.
Sollte es zu einer Fehlermeldung kommen, dann sende uns den Fehlertext einfach per Mail an [team@angular.schule](mailto:team@angular.schule) oder bringe deine Fragen zum Technikcheck mit.

<hr>

<img src="http://assets.angular.schule/logo-angular-schule.png" height="60">

### &copy; https://angular.schule | Stand: 22.02.2022

