from django import forms

class EmailForm(forms.Form):
    subject = forms.CharField(label='subject', max_length=300)
    message = forms.CharField(widget=forms.Textarea)
    sender = forms.EmailField()
    cc_myself = forms.BooleanField(required=False)
