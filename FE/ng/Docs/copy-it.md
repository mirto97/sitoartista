
# Italian site copy

Every string a visitor can see. Keys in English, text in Italian. Status: **draft** = not yet approved by the PO; **ok** = approved (D121).

> **Righe che il front-end non usa** (verificato sul codice del progetto originale):
>
> - `email.*` (29 righe, sezione "Email all'artista"): le usa solo il back-end per i testi delle email.
> - `site.title`, `social.titolo`, `quadri.alt_default`: nessun uso trovato nel codice.
>
> **Condivise con il back-end:** `dimmi.*` (il riepilogo della commissione nelle email le stampa).

## Global (0.1)

| Key | Text | Status |
| --- | --- | --- |
| `site.title` | Casa di Ilaria | ok |
| `site.description` | I quadri di Ilaria: la mia galleria, le opere in vendita e i quadri su commissione. | ok |
| `nav.home` | Home | ok |
| `nav.quadri` | I miei quadri | ok |
| `nav.in_vendita` | In vendita | ok |
| `nav.dimmi` | Dimmi il tuo quadro | ok |
| `nav.contatti` | Contatti | ok |
| `nav.accedi` | Accedi | ok |
| `nav.menu_open` | Apri il menu | ok |
| `nav.menu_close` | Chiudi il menu | ok |
| `nav.skip` | Vai al contenuto | ok |
| `precarica.etichetta` | Preparo la casa | ok |

## Lavori in corso (production until 1.0)

| Key | Text | Status |
| --- | --- | --- |
| `coming_soon.title` | Lavori in corso | ok |
| `coming_soon.body` | Sto preparando una nuova casa per i miei quadri. Torna a trovarmi presto! | ok |

## Pages not built yet (preview only)

| Key | Text | Status |
| --- | --- | --- |
| `stub.title` | In arrivo | ok |
| `stub.body` | Questa stanza è ancora in allestimento. | ok |
| `stub.back` | Torna all'ingresso | ok |

## Social (0.2)

| Key | Text | Status |
| --- | --- | --- |
| `social.titolo` | Seguimi | ok |
| `footer.contattami` | Contattami | ok |
| `footer.note_legali` | Note legali | draft |
| `social.facebook` | Ilaria su Facebook (si apre in una nuova scheda) | ok |
| `social.instagram` | Ilaria su Instagram (si apre in una nuova scheda) | ok |

## Home and Ingresso (0.2)

| Key | Text | Status |
| --- | --- | --- |
| `home.entra` | Entra | ok |
| `home.salta` | Salta | ok |
| `home.alt` | La casa dipinta vista dalla strada: una casa di campagna color crema, con il tetto marrone e il cancello rosso. | ok |
| `ingresso.titolo` | Ingresso | ok |
| `ingresso.alt` | L'ingresso della casa: a sinistra un corridoio con le cornici, a destra una stanza bianca, in fondo lo studio con il cavalletto. | ok |
| `ingresso.uscita_quadri` | I miei quadri | ok |
| `ingresso.uscita_vendita` | I miei quadri in vendita | ok |
| `ingresso.uscita_dimmi` | Dimmi il tuo quadro | ok |
| `ingresso.tuo_quadro.alt` | Il tuo quadro, sul cavalletto accanto alla porta dello studio. | ok |
| `ingresso.tuo_quadro.togli` | Togli il quadro | ok |
| `ingresso.tuo_quadro.apri` | Riprendi il tuo quadro | draft |
| `ingresso.tuo_quadro.togli.conferma` | Vuoi togliere il tuo quadro dal cavalletto? Non potrai più riprenderlo. | draft |
| `ingresso.tuo_quadro.togli.conferma.inviato` | Vuoi togliere il tuo quadro dal cavalletto? La richiesta che mi hai mandato resta valida. | draft |
| `ingresso.tuo_quadro.togli.si` | Sì, toglilo | draft |
| `ingresso.tuo_quadro.togli.no` | No, lascialo | draft |
| `hall.hint` | Scegli una porta per entrare in una stanza. | ok |

## Contatti (0.2)

| Key | Text | Status |
| --- | --- | --- |
| `contact.title` | Scrivimi | ok |
| `contact.intro` | Hai una domanda su un quadro o vuoi semplicemente salutarmi? Scrivimi qui. | ok |
| `contact.name` | Nome | ok |
| `contact.email` | Email | ok |
| `contact.message` | Messaggio | ok |
| `contact.send` | Invia | ok |
| `contact.sending` | Invio in corso… | ok |
| `contact.success` | Grazie! Ho ricevuto il tuo messaggio e ti risponderò presto. | ok |
| `contact.error` | Qualcosa non ha funzionato. Riprova tra qualche minuto. | ok |
| `contact.error_rate` | Hai inviato troppi messaggi. Riprova più tardi. | ok |
| `contact.required` | Campo obbligatorio | ok |
| `contact.email_invalid` | Inserisci un indirizzo email valido | ok |
| `contact.too_long` | Il testo è troppo lungo | ok |
| `contact.privacy` | Userò i tuoi dati solo per risponderti. | ok |
| `contact.close` | Chiudi | ok |

## Quadri (0.3)

| Key | Text | Status |
| --- | --- | --- |
| `corridoio.titolo` | I miei quadri | ok |
| `corridoio.scena` | Il corridoio con i miei quadri | ok |
| `corridoio.alt` | Il corridoio della casa: a sinistra una lunga parete chiara con i miei quadri, a destra le finestre, sotto il pavimento in cotto. | ok |
| `corridoio.precedente` | Quadro precedente | ok |
| `corridoio.successivo` | Quadro successivo | ok |
| `corridoio.targhetta` | N. {numero} · {titolo} | ok |
| `corridoio.indietro` | Indietro | ok |
| `corridoio.vedi` | Vedi | ok |
| `quadro.dialogo` | Il quadro da vicino: {titolo} | ok |
| `quadro.chiudi` | Chiudi | ok |
| `quadro.storia` | La mia storia | ok |
| `quadro.mi_piace` | Mi piace | ok |
| `quadro.non_mi_piace` | Non mi piace più | ok |
| `quadro.aggiungi` | Aggiungi al carrello | ok |
| `quadro.nel_carrello` | Nel carrello | ok |
| `quadro.riservato` | Riservato | ok |
| `quadro.venduto` | Venduto | ok |
| `quadro.prezzo` | {prezzo} € | ok |
| `quadro.dimensioni` | {larghezza} × {altezza} cm | ok |
| `vendita.titolo` | I miei quadri in vendita | ok |
| `vendita.vuoto` | Al momento non ho quadri in vendita. Torna a trovarmi presto! | ok |
| `vendita.precedente` | Quadro precedente | ok |
| `vendita.successivo` | Quadro successivo | ok |
| `vendita.posizione` | Quadro {n} di {totale} | ok |
| `vendita.ingrandisci` | Ingrandisci | ok |
| `vendita.riduci` | Riduci | ok |
| `vendita.aiuto_zoom` | Tocca due volte il quadro per vedere i dettagli | ok |
| `vendita.lente` | Puoi avvicinarti ai dettagli | ok |
| `vendita.aiuto_chiudi` | Chiudi | ok |
| `quadri.alt_default` | Dipinto di Ilaria Massera: {titolo} | ok |
| `salta.pulsante` | Salta a… | ok |
| `salta.dialogo` | Salta a un quadro | ok |
| `salta.spiegazione` | Puoi tornare ai quadri che hai già visto. | ok |
| `salta.voce` | N. {numero} · {titolo} | ok |
| `salta.voce_attuale` | N. {numero} · {titolo}, sei qui | ok |
| `salta.qui` | Sei qui | ok |
| `salta.voce_bloccata` | Quadro {numero}, non ancora visto | ok |
| `salta.sbloccato` | Ora puoi tornare ai quadri che hai già visto con Salta a… | ok |
| `salta.spiegazione_libera` | Scegli un quadro e ci vai subito. | ok |
| `salta.pulsante_filtri` | Salta a… ({n} di {totale}) | ok |
| `filtri.pulsante` | Filtra i quadri | ok |
| `filtri.pulsante_attivi` | Filtri: {elenco} | ok |
| `filtri.dialogo` | Quali quadri vuoi vedere? | ok |
| `filtri.spiegazione` | Puoi sceglierne più di uno. Per la misura conta il lato più lungo. | ok |
| `filtri.tecnica` | Tecnica | ok |
| `filtri.tecnica.acquerello` | Acquerello | ok |
| `filtri.tecnica.acrilico` | Acrilico | ok |
| `filtri.tecnica.olio` | Olio | ok |
| `filtri.tecnica.altre` | Altre tecniche | ok |
| `filtri.misura` | Misura | ok |
| `filtri.misura.piccolo` | Piccolo · fino a {fino} cm | ok |
| `filtri.misura.medio` | Medio · {da}–{fino} cm | ok |
| `filtri.misura.grande` | Grande · oltre {da} cm | ok |
| `filtri.mostra` | Mostra {n} quadri | ok |
| `filtri.mostra_uno` | Mostra 1 quadro | ok |
| `filtri.nessuno` | Nessun quadro | ok |
| `filtri.azzera` | Togli i filtri | ok |
| `filtri.annuncio` | Ora vedi {n} quadri su {totale}. | ok |
| `filtri.annuncio_uno` | Ora vedi 1 quadro su {totale}. | ok |

## Carrello e richiesta d'acquisto (0.4)

| Key | Text | Status |
| --- | --- | --- |
| `carrello.apri_uno` | Carrello, 1 quadro | ok |
| `carrello.apri` | Carrello, {n} quadri | ok |
| `carrello.titolo` | Il tuo carrello | ok |
| `carrello.chiudi` | Chiudi | ok |
| `carrello.vuoto` | Il carrello è vuoto. | ok |
| `carrello.rimuovi` | Togli {titolo} dal carrello | ok |
| `carrello.prezzo_su_richiesta` | Prezzo su richiesta | ok |
| `carrello.totale` | Totale | ok |
| `carrello.nota` | Il pagamento non avviene sul sito: ti scriverò per accordarci su pagamento e consegna. | ok |
| `carrello.messaggio` | Messaggio (facoltativo) | ok |
| `carrello.invia` | Invia la richiesta | ok |
| `carrello.successo` | Grazie! Ho ricevuto la tua richiesta e ti scriverò presto. | ok |
| `carrello.non_disponibili` | Questi quadri non sono più disponibili e li ho tolti dal carrello: {titoli}. | ok |

## Dimmi il tuo quadro (0.5)

The painting methods Q4 offers besides its cards (Tempera, Bianco e nero, Carboncino…) are content, like painting titles, not copy: their names are in `src/data/tecniche-altre.json` (D136).

| Key | Text | Status |
| --- | --- | --- |
| `dimmi.titolo` | Dimmi il tuo quadro | ok |
| `dimmi.prezzo.indicativo` | Prezzo indicativo | ok |
| `dimmi.prezzo.da` | da | ok |
| `dimmi.anteprima.avviso` | Questa è solo un'anteprima: il tuo quadro lo dipingerò a mano, il più vicino possibile alla tua foto. | ok |
| `dimmi.foto.carica` | Trascina qui la tua foto o tocca per sceglierla | ok |
| `dimmi.foto.cambia` | Cambia foto | ok |
| `dimmi.foto.preparo` | Preparo la tua foto… | draft |
| `dimmi.foto.errore` | Non riesco ad aprire questa foto. Prova con un'altra, per esempio una scattata con il telefono. | draft |
| `dimmi.foto.grande` | Questa foto è troppo grande per me. Prova con un'altra, per esempio una scattata con il telefono. | draft |
| `dimmi.foto.tipo` | Questo file non è una foto. Scegli una foto dal telefono o dal computer. | draft |
| `dimmi.foto.alt` | La tua foto di riferimento | ok |
| `dimmi.tela.alt` | Anteprima del tuo quadro sul cavalletto | ok |
| `dimmi.forma.orizzontale` | Orizzontale | ok |
| `dimmi.forma.verticale` | Verticale | ok |
| `dimmi.forma.tondo` | Tondo | ok |
| `dimmi.misura.piccola` | Piccola | ok |
| `dimmi.misura.media` | Media | ok |
| `dimmi.misura.grande` | Grande | ok |
| `dimmi.tecnica.acquerello` | Acquerello | ok |
| `dimmi.tecnica.acrilico` | Acrilico | ok |
| `dimmi.tecnica.olio` | Olio | ok |
| `dimmi.tecnica.decidi` | Decidi tu | ok |
| `dimmi.nojs` | Per creare il tuo quadro serve JavaScript. Puoi sempre scrivermi: | ok |
| `dimmi.benvenuto` | Benvenuto nel mio studio. Mandami la foto che vorresti vedere dipinta e guarda il tuo quadro nascere sul cavalletto. | ok |
| `dimmi.scelta.continua` | Continua il percorso | ok |
| `dimmi.scelta.scrivi` | Scrivi all'artista | ok |
| `dimmi.scelta.riprendi` | Riprendi il tuo quadro | draft |
| `dimmi.scelta.nuovo` | Inizia un quadro nuovo | draft |
| `dimmi.avanti` | Avanti | ok |
| `dimmi.indietro` | Indietro | ok |
| `dimmi.progresso` | Domanda {n} di {tot} | ok |
| `dimmi.anteprima.breve` | Solo un'anteprima | ok |
| `dimmi.q1.titolo` | Che tela immagini? | ok |
| `dimmi.q1.forma` | Forma | ok |
| `dimmi.q1.misura` | Misura | ok |
| `dimmi.q2.titolo` | Carica la foto da cui dipingerò il tuo quadro. | ok |
| `dimmi.q2.suggerimento` | Una foto nitida e ben illuminata mi aiuta a dipingere meglio. | ok |
| `dimmi.q2.inquadra.aiuto` | Trascina la foto e cambiane la grandezza per scegliere che cosa dipingere. | draft |
| `dimmi.q2.inquadra.zoom` | Grandezza della foto | draft |
| `dimmi.q2.inquadra.centra` | Rimetti al centro | ok |
| `dimmi.q2.inquadra.ok` | Va bene così | ok |
| `dimmi.q2.inquadra.cambia` | Cambia inquadratura | ok |
| `dimmi.q2.inquadra.area` | Inquadratura della foto: usa le frecce per spostarla, + e − per cambiarne la grandezza. | draft |
| `dimmi.q2.inquadra.bianco` | Attenzione: una parte della tela è rimasta bianca e io non la dipingerò. Ingrandisci la foto, oppure torna indietro e scegli un'altra forma di tela, o cambia foto. | ok |
| `dimmi.q3.titolo` | Che cosa ritrae la tua foto? | ok |
| `dimmi.q3.persona` | Una persona | ok |
| `dimmi.q3.persone` | Più persone | ok |
| `dimmi.q3.animale` | Un animale | ok |
| `dimmi.q3.luogo` | Un luogo o un paesaggio | ok |
| `dimmi.q3.altro` | Altro | ok |
| `dimmi.q4.titolo` | Quale tecnica preferisci? | ok |
| `dimmi.tecnica.acquerello.descr` | Velature leggere, colori che sfumano ai bordi. | ok |
| `dimmi.tecnica.acrilico.descr` | Colori decisi e pennellate ben visibili. | ok |
| `dimmi.tecnica.olio.descr` | Colori ricchi e fusi, pennellate più corpose. | ok |
| `dimmi.tecnica.decidi.descr` | Scelgo io la tecnica più adatta alla tua foto. | ok |
| `dimmi.altra.etichetta` | Hai in mente uno stile preciso? | draft |
| `dimmi.altra.aiuto` | Per esempio tempera, bianco e nero o carboncino. Il soggetto resta la tua foto: cambia solo il modo in cui la dipingo. | draft |
| `dimmi.altra.nessuno` | Non lo trovo. Scegli una delle tecniche qui sopra e raccontamelo nell'ultima domanda. | draft |
| `dimmi.altra.scelto` | Stile: | draft |
| `dimmi.altra.togli` | Togli lo stile | draft |
| `dimmi.altra.nota` | Questo stile aggiunge {euro} € al prezzo indicativo: poi lo confermo o lo adatto io. | draft |
| `dimmi.q5.titolo` | Per chi è il quadro? | ok |
| `dimmi.q5.me` | Per me | ok |
| `dimmi.q5.regalo` | È un regalo | ok |
| `dimmi.q5.messaggio` | Vuoi scrivere un messaggio? (facoltativo) | ok |
| `dimmi.q5.messaggio.suggerimento` | Scriverò il tuo messaggio su un biglietto e lo metterò sul pacco, quando avrò accettato il quadro e il pagamento sarà andato a buon fine. | draft |
| `dimmi.q5.messaggio.info` | Che cosa succede al messaggio | draft |
| `dimmi.q5.messaggio.conta` | {n} / 300 | draft |
| `dimmi.q6.titolo` | Dove lo appenderai? | ok |
| `dimmi.q6.soggiorno` | Soggiorno | ok |
| `dimmi.q6.camera` | Camera da letto | ok |
| `dimmi.q6.studio` | Studio o ufficio | ok |
| `dimmi.q6.nonso` | Non lo so ancora | ok |
| `dimmi.q7.titolo` | Entro quando vorresti riceverlo? | ok |
| `dimmi.q7.nofretta` | Non ho fretta | ok |
| `dimmi.q7.duemesi` | Entro due mesi | ok |
| `dimmi.q7.unmese` | Entro un mese | ok |
| `dimmi.q7.data` | Una data precisa | ok |
| `dimmi.q7.scegli` | Scegli la data | ok |
| `dimmi.q8.titolo` | Come preferisci riceverlo? | ok |
| `dimmi.q8.dove` | Dove ti trovi? Scrivi il tuo CAP. | ok |
| `dimmi.q8.cap` | CAP | ok |
| `dimmi.q8.cap.errore` | Non trovo questo CAP: controlla le cinque cifre. | ok |
| `dimmi.q8.estero` | Vivo fuori dall'Italia | ok |
| `dimmi.q8.estero.testo` | Per ora spedisco solo in Italia. Mandami comunque la richiesta e troveremo una soluzione insieme. | ok |
| `dimmi.q8.spedizione` | Spedizione in Italia | ok |
| `dimmi.q8.ritiro` | Vengo a ritirarlo io | ok |
| `dimmi.q8.mano` | Consegna a mano | ok |
| `dimmi.q8.mano.entro` | Sei a meno di {km} km da me: posso portartelo a mano. | ok |
| `dimmi.q8.mano.chiedi` | Chiedi comunque la consegna a mano | ok |
| `dimmi.q8.mano.oltre` | La consegna a mano la faccio entro {km} km da casa mia. Puoi chiedermela lo stesso: la valuterò, magari con un piccolo supplemento. | ok |
| `dimmi.q8.mano.chiedi2` | Chiedi la consegna a mano | ok |
| `dimmi.q8.mano.nondisp` | Adesso non riesco a verificare la distanza: se la vuoi, chiedimela e ti farò sapere. | ok |
| `dimmi.q9.titolo` | Ecco il prezzo indicativo del tuo quadro. | ok |
| `dimmi.q9.tela` | Tela | ok |
| `dimmi.q9.tecnica` | Tecnica | ok |
| `dimmi.q9.totale` | Totale indicativo | ok |
| `dimmi.q9.consegna` | Consegna | ok |
| `dimmi.q9.daconcordare` | da concordare | ok |
| `dimmi.q9.nota` | Il prezzo finale e i tempi li decido io dopo aver visto la tua foto. | ok |
| `dimmi.q9.provvisori` | Prezzi provvisori: quelli definitivi arriveranno presto. | ok |
| `dimmi.q10.titolo` | C'è altro che vuoi raccontarmi? | ok |
| `dimmi.q10.facoltativo` | Facoltativo | ok |
| `dimmi.fine.titolo` | Ecco il tuo quadro! | ok |
| `dimmi.fine.cambia` | Cambia qualcosa | ok |
| `dimmi.fine.cambia.descr` | Torna indietro e cambia qualcosa per il tuo quadro prima di salvarlo o mandarmelo. | ok |
| `dimmi.fine.salva` | Salva ed esci | ok |
| `dimmi.fine.salva.descr` | Se salvi ed esci, lascio il tuo quadro sul cavalletto, puoi sempre modificarlo o mandarmelo. | ok |
| `dimmi.fine.manda` | Mandami il quadro | ok |
| `dimmi.fine.manda.descr` | Mandami il quadro e ti risponderò il prima possibile! | ok |
| `dimmi.fine.salva.errore` | Non riesco a salvare il quadro su questo dispositivo. Puoi mandarmelo subito, oppure uscire senza salvarlo. | draft |
| `dimmi.fine.esci` | Esci | ok |
| `dimmi.invio.titolo` | Mandami la tua richiesta | ok |
| `dimmi.invio.nome` | Il tuo nome | ok |
| `dimmi.invio.email` | La tua email | ok |
| `dimmi.invio.privacy` | Userò la tua foto e i tuoi dati solo per rispondere a questa richiesta. | ok |
| `dimmi.invio.invia` | Invia la richiesta | ok |
| `dimmi.invio.invio` | Invio in corso… | ok |
| `dimmi.invio.ok` | Grazie! Ho ricevuto la tua richiesta: ti risponderò via email. | ok |
| `dimmi.inviato.testo` | Mi hai mandato questo quadro il {data}: ti risponderò via email. | draft |
| `dimmi.invio.errore` | Non sono riuscita a ricevere la richiesta. Riprova tra poco. | ok |
| `dimmi.invio.troppi` | Hai già mandato qualche richiesta: riprova tra qualche minuto. | ok |

## Note legali (0.5.5)

| Key | Text | Status |
| --- | --- | --- |
| `note.titolo` | Note legali | draft |
| `note.intro` | Questa pagina è ancora in preparazione. Qui trovi da dove vengono i dati e i programmi che il sito usa. | draft |
| `note.dati.titolo` | Dati | draft |
| `note.software.titolo` | Programmi | draft |
| `note.dati.cap` | Dati dei CAP: GeoNames | draft |
| `note.dati.confini` | Confini comunali: Istat, tramite openpolis | draft |
| `note.software.heic` | libheif-js 1.23.5, per aprire le foto HEIC (licenza LGPL-3.0). | draft |
| `note.software.licenza` | Testo della licenza | draft |
| `note.software.sorgente` | Codice sorgente | draft |

## Email all'artista (0.5)

| Key | Text | Status |
| --- | --- | --- |
| `email.contatto.oggetto` | Nuovo messaggio da {nome} | ok |
| `email.richiesta.oggetto` | Richiesta d'acquisto da {nome} | ok |
| `email.commissione.oggetto` | Nuova richiesta di un quadro da {nome} | ok |
| `email.contatto.intro` | Hai ricevuto un nuovo messaggio dal sito. | ok |
| `email.richiesta.intro` | Qualcuno vorrebbe acquistare uno dei tuoi quadri. | ok |
| `email.commissione.intro` | Qualcuno ti chiede un quadro su commissione. | ok |
| `email.campo.nome` | Nome | ok |
| `email.campo.email` | Email | ok |
| `email.campo.messaggio` | Messaggio | ok |
| `email.campo.pagina` | Pagina | ok |
| `email.campo.quadri` | Quadri | ok |
| `email.campo.totale` | Totale | ok |
| `email.campo.risposte` | Le risposte | ok |
| `email.campo.biglietto` | Messaggio per il biglietto | draft |
| `email.campo.stima` | Prezzo indicativo | ok |
| `email.campo.consegna` | Consegna | ok |
| `email.campo.foto` | Foto di riferimento | ok |
| `email.prezzo_su_richiesta` | prezzo su richiesta | ok |
| `email.prezzi_provvisori` | I prezzi del sito sono ancora provvisori. | ok |
| `email.entro.si` | Dentro la zona di consegna a mano. | ok |
| `email.entro.no` | Fuori dalla zona di consegna a mano. | ok |
| `email.entro.sconosciuto` | Zona di consegna non verificata. | ok |
| `email.campo.anteprima` | Anteprima approvata dal cliente | draft |
| `email.anteprima_non_inviata` | L'anteprima non è arrivata con questa richiesta. | draft |
| `email.anteprima_non_disponibile` | L'anteprima è salvata con la richiesta, ma il link non è stato creato. | draft |
| `email.foto_link_nota` | I link restano validi 30 giorni. | draft |
| `email.foto_non_disponibile` | La foto è salvata con la richiesta, ma il link non è stato creato. | ok |
| `email.rispondi` | Per rispondere a {nome} basta premere "Rispondi". | ok |
| `email.firma` | Casa di Ilaria | ok |

## Errors

| Key | Text | Status |
| --- | --- | --- |
| `404.title` | Pagina non trovata | ok |
| `404.body` | Questa porta non conduce da nessuna parte. | ok |
| `404.back` | Torna all'ingresso | ok |