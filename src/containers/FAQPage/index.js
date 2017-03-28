/**
  * FAQ page of the App
  *
  * @namespace FAQ
  */

import React from 'react';
import styled from 'styled-components';

import Wrapper from './Wrapper';
import Accordion from 'components/Accordion';
import H1 from 'components/H1';


const FAQLi = styled.li`
  list-style: decimal;
`;

const FAQ = () => {
  const entries = [
    {
      question: 'Was ist Trigen?',
      answer: () => {
        return (
          <p>Trigen ist ein Passwort-Service vergleichbar mit Passwort-Managern wie Keepass.
        Im Unterschied zu traditionellen Passwort-Mangagern werden die Passwörter allerdings nicht
        auf unseren Servern gespeichert. Stattdessen generieren wir das Passwort jedes Mal, wenn Du es brauchst.
            </p>)
      }
    },
    {
      question: 'Wie funktioniert Trigen?',
      answer: () => {
        return ([
          <p>Trigen generiert ein Passwort aus insgesamt drei Bestandteilen:</p>,
          <ul>
            <FAQLi key="1">Einer Kombination aus Nutzername und einer Web-Domain</FAQLi>
            <FAQLi key="2">Einem gehmeimen Schlüssel, welchen wir für jeden Nutzer generieren</FAQLi>
            <FAQLi key="3">Deinem ganz persönFAQLichen Masterpasswort</FAQLi>
          </ul>,
          <p>So kannst du für jeden Dienst sichere Passwörter generieren</p>
        ]);
      }
    },
    {
      question: 'Kann ich auch eigene, bereits verwendete Passwörter nutzen?',
      answer: () => {
        return (
          <p>Nein, das geht leider nicht, da wir dass Passwort jedes Mal dynamisch für Dich
            generieren und keine Passwörter auf unseren Servern speichern.</p>
        );
      }
    },
    {
      question: 'Was muss ich bei meinem Masterpasswort beachten?',
      answer: () => {
        return ([
          <p>Da alle deine Passwörter mit Deinem ganz persönlichen Masterpasswort
            generiert werden, sollte selbiges natürlich besonders sicher sein.
            Im Folgenden findest du einige Tipps, welche du bzgl. des Masterpasswords beachten solltest:
          </p>,
          <ul>
            <FAQLi key="1">Wähle ein möglichst langes Passwort. Im Idealfall sollte das Passwort mindestens 16 Zeichen lang sein</FAQLi>
            <FAQLi key="2">Generiere eine Phrase aus zufälligen Wörtern (bspw. "autoBrotVogelQuantenphysik"). So kannst du dir das Passwort leichter merken und generierst ein ausreichend langes Passwort.</FAQLi>
            <FAQLi key="3">Wenn du das Passwort noch sicherer machen möchtest, kannst du außerdem Sonderzeichen, Zahlen und Groß-/Kleinschreibung mit in dein Passwort einfügen</FAQLi>
            <FAQLi key="4">Stelle sicher, dass Du Dir Dein Passwort gut merken kannst!
              Da wir das Masterpasswort nirgends für dich speichern, gibt es auch keine Möglichkeit selbiges zu ändern oder abzufragen, solltest du es vergessen haben.
            </FAQLi>
            <FAQLi key="5">Um die Sicherheit deiner Passwörter nicht zu gefährden, solltest du Dein Masterpasswort im Idealfall auch nirgendwo hinterlegen. Tust du es doch, stell sicher, dass niemand anderes an dein Passwort gelangen kann.</FAQLi>
            <FAQLi key="6">Wähle auf gar keinen Fall dein Trigen-Nutzerpasswort als Masterpasswort!</FAQLi>
          </ul>
        ]);
      }
    },
    {
      question: 'Wie kann ich mehr Account-Slots erhalten?',
      answer: () => {
        return (
          <p>Mehr Slots erhältst du direkt über deinen Account-Zugang. 100 zusätzliche Slots
            kosten Dich 5Eur</p>
        );
      }
    },
  ];

  return (
    <Wrapper>
      <H1>FAQ</H1>
      <Accordion entries={entries} />
    </Wrapper>
  );
};

export default FAQ;
