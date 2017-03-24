# Getir Hackathon 2017 - Wow Team

This is the preliminary task repository of Wow Team at Getir Hackathon 2017.

## Preliminary Tasks

### Backend Task

In this task, Getir wants us to create an endpoint `POST /getRecord`
that gets a key and returns a record from their MongoDB database.

Example request body:
```json
{
  "key" : "chp8vgSkJDbyDKAS"
}
```

Example response:
```json
{
  "key" : "chp8vgSkJDbyDKAS",
  "value" : "9sScg6DaMLbMTgLdPADPYJTyOd6AgHDs9SZNkgGTlHeQF",
  "createdAt" : "2016-01-26"
}
```

**Live Heroku URL:** https://agile-river-79628.herokuapp.com/

### Frontend Task

In this task, Getir wants us to create a simple AngularJS application
that lets users to choose a start and end date from a datepicker.

Once the user chooses the dates and clicks on the send button, Getir wants us to
make a request to a URL with those dates and display the returned records in a table.

Example request body:
```json
{
  "startDate": "2016-01-26",
  "endDate": "2017-02-02"
}
```

Example response from server:
```json
{
  "code": 0,
  "msg": "Success",
  "records": [
    {
      "key": "xPJDjadRGngrmahF",
      "value": "aM5bOirRUKANvQNxkZEdT8TYOXJRY4jYsoUQiI5sfrqN47M4cwKnakWggP162t1pMJdHDhLEtnBu4m",
      "createdAt": "2016-07-10T00:52:45.576Z"
    },
    {
      "key": "A7adpxOxksYbHNSU",
      "value": "uQklE3J0UdmBCfUQa1b2fts9jdEKTgFPjsEjvsPZpBXApHdiNeqm10r6DETXKJbqRJ9rZCM9DMm9sgQ",
      "createdAt": "2016-07-10T01:02:44.237Z"
    },
    {
      "key": "aQRCy734GLQnmF2x",
      "value": "q65h4d0c1Ws54hqLrvqljbcM6F1THv9f0WnKsysj30Sxo0vrpjxoD4lG4cdqkAbxddElxHsZyXdOacq",
      "createdAt": "2016-07-10T01:11:04.190Z"
    }
  ]
}
```

**Live Heroku URL:** https://glacial-retreat-38499.herokuapp.com/
