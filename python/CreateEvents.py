from SQLiteInsert import insert
import sqlite3

class createEvents:

    global event
    event = {}

    def test():

        # creating db and table
        insert.main()


        # Testing if reacived data from db and uploading to event dictonary.
        one = "SELECT A FROM test LIMIT 1"

        event.update({'summary': one})
        print(event)

    test()