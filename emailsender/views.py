from django.shortcuts import render
from django.core.mail import send_mail


def emailsender(request):
    send_mail(
        'Hello',
        'Hello this is the body',
        'chenzhun.huang@gmail.com',
        ['chenzhun.huang@mail.mcgill.ca'],
        fail_silently=False
    )
    return render(request, 'emailsender/emailsender.html')
