import sqlite3
from sqlite3 import Error
import pandas as pd


class insert:
    path = r"C:\Users\corbi\OneDrive\repos\todue\ToDue\python\test_py_bot.xlsx"
    df = pd.read_excel(path)

    def generateTableAndInsertStatement(df, tableName):
        """Creates Table and Insert Statement for sqlite db"""
            
        dfCols = df.columns
            
        # generate table_statement and columns
        global table_statement
        table_statement = "CREATE TABLE IF NOT EXISTS " + tableName + " ("
        for colName in dfCols:
            table_statement += colName + " VARCHAR(50), "

        #removing last space and comma
        table_statement = table_statement[:-2] + ")"
        print(table_statement)
        cursor.execute(table_statement)

        # grabbing rows from excel sheet and adding them to vlaues list as tuples
        numCols = df.shape[1]
        values = []
        vals = []
        
        for index, row in df.iterrows():
            for i in list(df):
                values.append(str(row[i]))
            
            if numCols == 23:
                vals.append((str(row[0]), str(row[1]), str(row[2]), str(row[3]), str(row[4]), str(row[5]), str(row[6]), 
                            str(row[7]), str(row[8]), str(row[9]), str(row[10]), str(row[11]), str(row[12]), str(row[13]), 
                            str(row[14]), str(row[15]), str(row[16]), str(row[17]), str(row[18]), str(row[19]), str(row[20]),
                            str(row[21]), str(row[22])))
            elif numCols == 15:
                vals.append((str(row[0]), str(row[1]), str(row[2]), str(row[3]), str(row[4]), str(row[5]), str(row[6]), 
                            str(row[7]), str(row[8]), str(row[9]), str(row[10]), str(row[11]), str(row[12]), str(row[13]), 
                            str(row[14])))
            elif numCols == 7:
                vals.append((str(row[0]), str(row[1]), str(row[2]), str(row[3]), str(row[4]), str(row[5]), str(row[6])))
            elif numCols == 9:
                vals.append((str(row[0]), str(row[1]), str(row[2]), str(row[3]), str(row[4]), str(row[5]), str(row[6]), 
                            str(row[7]), str(row[8])))            
            elif numCols == 8:
                vals.append((str(row[0]), str(row[1]), str(row[2]), str(row[3]), str(row[4]), str(row[5]), str(row[6]), 
                            str(row[7])))
            elif numCols == 6:
                vals.append((str(row[0]), str(row[1]), str(row[2]), str(row[3]), str(row[4]), str(row[5])))                 
            elif numCols == 3:
                vals.append((str(row[0]), str(row[1]), str(row[2])))
            elif numCols == 2:
                vals.append((str(row[0]), str(row[1])))
            elif numCols == 1:
                vals.append((str(row[0]),))
            else:
                Error
        # commit changes to database
        if numCols == 23:
            cursor.executemany("INSERT INTO " + tableName + " VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ", vals)
            conn.commit()        
        elif numCols == 15:
            cursor.executemany("INSERT INTO " + tableName + " VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ", vals)
            conn.commit()
        elif numCols == 9:
            cursor.executemany("INSERT INTO " + tableName + " VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?) ", vals)
            conn.commit()        
        elif numCols == 8:
            cursor.executemany("INSERT INTO " + tableName + " VALUES (?, ?, ?, ?, ?, ?, ?, ?) ", vals)
            conn.commit()
        elif numCols == 7:
            cursor.executemany("INSERT INTO " + tableName + " VALUES (?, ?, ?, ?, ?, ?, ?) ", vals)
            conn.commit()
        elif numCols == 6:
            cursor.executemany("INSERT INTO " + tableName + " VALUES (?, ?, ?, ?, ?, ?) ", vals)
            conn.commit()
        elif numCols == 3:
            cursor.executemany("INSERT INTO " + tableName + " VALUES (?, ?, ?) ", vals)
            conn.commit()
        elif numCols == 2:
            cursor.executemany("INSERT INTO " + tableName + " VALUES (?, ?) ", vals)
            conn.commit()
        elif numCols == 1:
            cursor.executemany("INSERT INTO " + tableName + " VALUES (?) ", vals)
            conn.commit()        
        else:
            Error

        print("The data has been uplaoded!")

    def main():
        """creates connection by calling approiate function along with generateTableAndInsertStatement"""
        # create db connection
        global conn
        # CHANGE DATABASE NAME
        conn = sqlite3.connect("test.db")
        global cursor
        cursor = conn.cursor()

        if conn is not None:
            # CHANGE TABLE NAME HERE
            generateTableAndInsertStatement(df, "Test")
        else:
            print("Error! cannot create the database connection.")

    if __name__ == '__main__':
        main()