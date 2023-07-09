from flask import Flask, request, jsonify
import psycopg2
import hashlib
import requests
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


def establish_connection():
    conn = psycopg2.connect(
        host="localhost",
        port="5432",
        database="jeet",
        user="postgres",
        password="vidhan12"
    )
    cur = conn.cursor()
    return conn, cur


def close_connection(conn, cur):
    cur.close()
    conn.close()


@app.route('/')
def index():
    print('yes')
    return jsonify(message='User added successfully'), 200


# Hash and store the password
def hash_password(user_password):
    hashed_password = hashlib.sha256(user_password.encode('utf-8')).hexdigest()
    return hashed_password

def verify_password(hashed_password, user_password):
    # Hash the user password using SHA-256
    hashed_user_password = hashlib.sha256(user_password.encode('utf-8')).hexdigest()
    # Compare the hashed passwords
    return hashed_password == hashed_user_password

@app.route('/add_user', methods=['POST'])
def add_user():
    try:
        (conn, cur) = establish_connection()
        data = request.get_json()
        first_name = data['firstname']
        last_name = data['lastname']
        user_email = data['email']
        user_password = hash_password(data['password'])
        result = get_info(user_email, user_password)
        print(result)
        
        if len(result) != 0:
            message = 'User already exists'
        elif data['role'] == 0:
            udise_no = data['UDISE']
            user_role = "viewer"
            cur.execute(
                "INSERT INTO jeet.users (first_name, last_name, user_email, user_password, user_role, udise_no) "
                "VALUES (%s, %s, %s, %s, %s, %s)",
                (first_name, last_name, user_email, user_password, user_role, udise_no))
            message = 'Viewer added successfully'
        elif data['role'] == 1:
            udise_no = 0
            user_role = "creator"
            cur.execute(
                "INSERT INTO jeet.users (first_name, last_name, user_email, user_password, user_role, udise_no) "
                "VALUES (%s, %s, %s, %s, %s, %s)",
                (first_name, last_name, user_email, user_password, user_role, udise_no))
            message = 'Creator added successfully'
        
        conn.commit()
        close_connection(conn, cur)
        return jsonify(message=message, id=user_email), 200
    
    except psycopg2.Error as error:
        # Handle the error as per your requirement
        error_message = f"Error executing SQL statement: {error}"
        return jsonify(message=error_message), 500


# Verify the password
def verify_password(hashed_password, user_password):
    return bcrypt.checkpw(user_password.encode('utf-8'), hashed_password)


@app.route('/user_login', methods=['POST'])
def user_login():
    try:
        data = request.get_json()
        user_email = data['email']
        user_password = data['password']
        hashed_password = hash_password(user_password)
        result = get_info(user_email, hashed_password)
        message = 'Does Not exist'
        if len(result)==1:
            message = 'Login Successful'
        return jsonify(message=message, id=user_email), 200
    
    except Exception as error:
        # Handle the error as per your requirement
        error_message = f"An error occurred: {error}"
        return jsonify(message=error_message), 500
def check():
    data = request.get_json()
    user_email = data['email']
    user_password = data['password']
    hashed_password = hash_password(user_password)
    if verify_password(hashed_password, user_password):
        print("Login successful!")
    else:
        print("Login failed!")
    result = get_info(user_email, user_password)
    message = 'Does Not exist'
    if result:
        message = 'Login Successful'
    return jsonify(message=message, id=user_email), 200



def get_info(email, password):
    (conn, cur) = establish_connection()
    cur.execute("SELECT * FROM jeet.users where user_email=%s and user_password=%s", (email, password))
    result = cur.fetchall()
    conn.commit()
    close_connection(conn, cur)
    return result


@app.route('/add_video', methods=['POST'])
def add_video():
    try:
        (conn, cur) = establish_connection()
        data = request.get_json()
        user_email = data['email']
        video_name = data['videoName']
        video_url = data['videoURL']
        pdf_url = data['workbookLink']
        ppt_url = data['pptLink']
        class_no = data['selectedClass']
        tags = data['tags']
        view_counter = 0
        upvote_counter = 0
        approval = -1
    
        cur.execute("INSERT INTO jeet.videos (user_email, video_name, video_url, pdf_url, ppt_url, class_no, tags, view_counter, upvote_counter, approval) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)",(user_email, video_name, video_url, pdf_url, ppt_url, class_no, tags, view_counter, upvote_counter, approval))
        conn.commit()
        close_connection(conn, cur)
        return jsonify(message='Content successfully added', id=user_email), 200
    
    except Exception as error:
        # Handle the error as per your requirement
        error_message = f"An error occurred: {error}"
        return jsonify(message=error_message), 500



@app.route('/update_video_view', methods=['POST'])
def update_video_view():
    (conn, cur) = establish_connection()
    data = request.get_json()
    video_url=data['videoURL']
    cur.execute('UPDATE jeet.videos SET view_counter = view_counter + 1 WHERE video_url = %s', video_url)
    conn.commit()
    close_connection(conn, cur)
    return jsonify(message='Sucessfully Viewed', id=video_url), 200


@app.get('/return_upvotes')
def return_upvotes():
    try:
        print("test")
        test1=requests.get("video_url")
        print(test1)
        (conn, cur) = establish_connection()
        cur.execute("SELECT upvote_counter FROM jeet.videos WHERE video_url = %s", test1)
        result = cur.fetchone()
        print(result)
        close_connection(conn, cur)
        return {"result": result}

    except Exception as error:
        # Handle the error as per your requirement
        error_message = f"An error occurred: {error}"
        return jsonify(message=error_message), 500
    
    


@app.route('/update_video_upvote', methods=['POST'])
def update_video_upvote():
    (conn, cur) = establish_connection()
    data = request.get_json()
    video_name=data['videoName']
    cur.execute('UPDATE jeet.videos SET upvote_counter = upvote_counter + 1 WHERE video_name = %s', video_name)
    conn.commit()
    close_connection(conn, cur)
    return jsonify(message='Sucessfully upvoted', id=video_name), 200

@app.route('/get_filtered_videos',methods=['POST'])
def get_filtered_videos():
    (conn, cur) = establish_connection()
    data = request.get_json()
    filters = data['search']
    tags = data['tags']
    words = []
    for tag in tags:
        words.extend(tag.split())
    words.extend(filters.split())
    query = "SELECT video_name,video_url,tags FROM jeet.videos WHERE "
    query += " OR ".join(["tags::text[] @> ARRAY[%s]::text[]"] * len(words))
    cur.execute(query, tuple(words))
    result = cur.fetchall()
    video_data = [{'name': row[0], 'url': row[1], 'tags': row[2]} for row in result]
    return jsonify(video_data=video_data), 200


@app.route('/get_all_users', methods=['GET'])
def get_all_users():
    try:
        (conn, cur) = establish_connection()
        cur.execute("SELECT * FROM jeet.users")
        result = cur.fetchall()
        conn.commit()
        close_connection(conn, cur)
        return jsonify(result)
    
    except psycopg2.Error as error:
        # Handle the error as per your requirement
        error_message = f"Error executing SQL statement: {error}"
        return jsonify(message=error_message), 500

#final changes have been made
=======
@app.route('/display_filters',methods=['POST'])
def filter_search():
    (conn, cur) = establish_connection()
    data = request.get_json()
    filters = data['tags']
    query = """ SELECT * FROM jeet.videos WHERE ARRAY[%s] <@ tags """
    cur.execute(query, (filters,))
    result = cur.fetchall()
    return jsonify(message=result), 200


@app.route('/admin_login',methods=['POST'])
def admin_login():
    data = request.get_json()
    first_name = data['first_name']
    last_name = data['last_name']
    user_email = data['user_email']
    user_password = data['user_password']
    result = get_info(user_email, user_password)
    message = 'Login Failed'
    if user_email == 'admin@jeeth.com' and user_password == 'hellopassword':
        message = 'Login Successful'
    return jsonify(message=message, id=user_email), 200

@app.route('/admin_page',methods=['GET'])
def admin_page():
    (conn, cur) = establish_connection()
    cur.execute("select * from jeet.videos where ")
    result = cur.fetchall()
    return jsonify(message=result), 200

@app.route('/get_videos',methods=['GET'])
def filter_search():
    (conn, cur) = establish_connection()
    cur.execute("select * from jeet.videos")
    result = cur.fetchall()
    return jsonify(message=result), 200

if __name__ == "__main__":
    app.run(debug=True)
