import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="yourusername",
  password="yourpassword"
)

def read_file_from_path(path):
    values = []
    file = open(path,"r")
    headers = data.readline()
     for line in file:
        list_line = line.split(",")
        values.append(list_line[1:3])
    return values

def execute_query(data):
    mycursor = mydb.cursor()
    sql = f'INSERT INTO products (names... ) VALUES { ",".join(data) }'
    mycursor.execute(sql, val)  
    mydb.commit()
    print(mydb)

name =  str(input("Nombre archivo"))
execute_query(read_file_from_path(name))

print("data inserted")




