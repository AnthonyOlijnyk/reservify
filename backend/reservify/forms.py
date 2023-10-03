from django import forms

class SignupForm(forms.Form):
    username = forms.CharField(label='username', max_length=100)
    name = forms.CharField(label='name', max_length=100)
    email = forms.EmailField(label='email', max_length=100)
    phone_number = forms.CharField(label='phone_number', max_length=100)
    password = forms.CharField(label='password', max_length=100, widget=forms.PasswordInput)