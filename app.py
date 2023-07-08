from flask import Flask, request, jsonify
import psycopg2
import bcrypt

app = Flask(__name__)


def establish_connection():
    conn = psycopg2.connect(
        "postgresql://postgres:password@localhost/postgres"
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
    salt = bcrypt.gensalt()
    hashed_password = bcrypt.hashpw(user_password.encode('utf-8'), salt)
    return hashed_password


@app.route('/add_user', methods=['POST'])
def add_user():
    (conn, cur) = establish_connection()
    data = request.get_json()
    first_name = data['first_name']
    last_name = data['last_name']
    udise_no = data['udise_no']
    user_email = data['user_email']
    user_password = hash_password(data['user_password'])
    result = get_info(user_email, user_password)
    message = 'Already Exist'
    if not result:
        message = 'User Added'
        cur.execute(
            "INSERT INTO jeet.users (first_name,last_name,udise_no,user_email,user_password) values (%s,%s,%s,%s,%s)",
            (first_name, last_name, udise_no, user_email, user_password))
    conn.commit()
    close_connection(conn, cur)
    return jsonify(message=message, id=user_email), 200


# Verify the password
def verify_password(hashed_password, user_password):
    return bcrypt.checkpw(user_password.encode('utf-8'), hashed_password)

@app.route('/user_login', methods=['POST'])
def check():
    data = request.get_json()
    user_email = data['user_email']
    user_password = data['user_password']
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


def get_info(email, password):
    (conn, cur) = establish_connection()
    cur.execute("SELECT * FROM jeet.users where user_email=%s and user_password=%s", (email, password))
    result = cur.fetchall()
    conn.commit()
    close_connection(conn, cur)
    return result


@app.route('/add_creator')
def add_creator():
    (conn, cur) = establish_connection()
    data = request.get_json()
    first_name = data['first_name']
    last_name = data['last_name']
    user_email = data['user_email']
    user_password = data['user_password']
    result = get_info(user_email, user_password)
    message = 'creator already present'
    if not result:
        cur.execute(
            "INSERT INTO jeet.content_creators (first_name,last_name,user_email,user_password) values (%s,%s,%s,%s)",
            first_name, last_name, user_email, user_password)
        message = 'Creator Added'
    conn.commit()
    close_connection(conn, cur)
    return jsonify(message=message, id=user_email), 200


def get_info_creator(email, password):
    (conn, cur) = establish_connection()
    cur.execute("SELECT * FROM jeet.content_creator where user_email=%s and user_password=%s", (email, password))
    result = cur.fetchall()
    conn.commit()
    close_connection(conn, cur)
    return result


@app.route('/add_video', methods=['POST'])
def add_video():
    (conn, cur) = establish_connection()
    data = request.get_json()
    user_email = data['user_email']
    video_name = data['video_name']
    video_url = data['video_url']
    pdf_url = data['pdf_url']
    ppt_url = data['ppt_url']
    class_no = data['class_no']
    tags = data['tags']
    view_counter = 0
    upvote_counter = 0
    cur.execute(
        "INSERT INTO jeet.videos (user_email,video_name,video_url,pdf_url,ppt_url,class_no,tags,view_counter,upvote_counter) VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s)",
        (user_email, video_name, video_url, pdf_url, ppt_url, class_no, tags, view_counter, upvote_counter))
    conn.commit()
    close_connection(conn, cur)
    return jsonify(message='Sucessfully added', id=user_email), 200


@app.route('/update_video_view', methods=['POST'])
def update_video_view(email):
    (conn, cur) = establish_connection()
    data = request.get_json()
    cur.execute('UPDATE jeet.videos SET view_counter = view_counter + 1 WHERE user_email = %s', email)
    conn.commit()
    close_connection(conn, cur)
    return jsonify(message='Sucessfully Viewed', id=email), 200

@app.route('/update_video_upvote', methods=['POST'])
def update_video_upvote(email):
    (conn, cur) = establish_connection()
    data = request.get_json()
    cur.execute('UPDATE jeet.videos SET upvote_counter = upvote_counter + 1 WHERE user_email = %s', email)
    conn.commit()
    close_connection(conn, cur)
    return jsonify(message='Sucessfully upvoted', id=email), 200


if __name__ == "__main__":
    app.run(debug=True)