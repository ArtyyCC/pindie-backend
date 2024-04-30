import pandas as pd
import random
import string

data = {
    'email': [],
    'password': [],
    'username': []
}

for _ in range(100):
    email = ''.join(random.choices(string.ascii_lowercase + string.digits, k=8)) + '@example.com'
    password = ''.join(random.choices(string.ascii_letters + string.digits, k=8))
    username = ''.join(random.choices(string.ascii_letters, k=5))

    data['email'].append(email)
    data['password'].append(password)
    data['username'].append(username)

data['email'][0] = 'invalid_email'
data['password'][1] = ''
data['username'][2] = '&^%$#@!'

df = pd.DataFrame(data)

df.to_csv('registration_test_data.csv', index=False)

print("CSV файл успешно создан.")
