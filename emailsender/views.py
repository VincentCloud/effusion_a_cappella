from django.shortcuts import render
from django.conf import settings
from django.core.exceptions import ValidationError
from django.core.mail import send_mail, BadHeaderError
from django.http import HttpResponse, HttpResponseBadRequest

import json

def nonempty(s):
    return isinstance(s, str) and len(s) > 0

def send_email(request):
    try:
        data = json.loads(request.body)
        print(data)
        if all(map(nonempty, [data['name'], data['email'], data['message']])):
            subject = f"New message from {data['name']}"
            message = f"From: {data['email']}\n\n{data['message']}"
            sender = data['email']
            recipients = settings.EMAIL_RECIPIENTS
            send_mail(subject, message, sender, recipients)
            return HttpResponse('Email sent!')
        raise ValidationError('Request validation failed')
    except (json.decoder.JSONDecodeError, ValidationError, KeyError):
        return HttpResponseBadRequest('Bad Request')
