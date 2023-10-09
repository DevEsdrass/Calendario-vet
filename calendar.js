gapi.load('client', function() {
    gapi.client.init({
        apiKey: 'https://calendar.google.com/calendar/ical/clinicavetclaracoelho%40gmail.com/private-ec1028c1328d011e2ff994cf61ac3919/basic.ics_KEY',
        clientId: 'clinicavetclaracoelho@gmail.com',
        discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
        scope: 'https://www.googleapis.com/auth/calendar.events'
    }).then(function() {
        console.log('API do Google Calendar carregada com sucesso.');
    }).catch(function(error) {
        console.error('Erro ao carregar API do Google Calendar:', error);
    });
});

document.getElementById('addEventButton').addEventListener('click', function() {
    document.getElementById('eventForm').style.display = 'block';
});

document.getElementById('saveEventButton').addEventListener('click', function() {
    const title = document.getElementById('eventTitle').value;
    const start = document.getElementById('eventStart').value;
    const end = document.getElementById('eventEnd').value;

    const event = {
        summary: title,
        start: {
            dateTime: start,
            timeZone: 'America/Fortaleza' 
        },
        end: {
            dateTime: end,
            timeZone: 'America/Fortaleza' 
        }
    };

    gapi.client.calendar.events.insert({
        calendarId: 'clinicavetclaracoelho@gmail.com', 
        resource: event
    }).then(function(response) {
        console.log('Evento adicionado:', response);
        document.getElementById('eventForm').style.display = 'none';
    }).catch(function(error) {
        console.error('Erro ao adicionar evento:', error);
    });
});
