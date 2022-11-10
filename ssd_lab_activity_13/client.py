import requests 
def signup():
    print("hello")

def signin():
    email = input("Enter email: ")
    password = input("Enter password: ")

    payload = {
        "email": email,
        "password": password
    }

    resp = requests.post("http://127.0.0.1:5000/user/signin", json=payload).content.decode()

    print(resp)


print("Enter Option:")
print("1. SignUp")

print("2. SignIn")
print("3. SignOut")
i = int(input("===>> "))
if i == 1:
    signup()
elif i == 2:
    signin()
