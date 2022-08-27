from django.shortcuts import render
from django.http import JsonResponse
import json

tasks = {'tasks': 
    [{
        "name": "Купить поды",
        "priority":"High",
        "type": "common",
        "start": "23/08/2022",
        "deadline": "26/08/2022",
        "status": "open"
        },
        {
        "name": "Сломать жопу",
        "priority":"Low",
        "type": "common",
        "start": "21/08/2022",
        "deadline": "26/08/2022",
        "status": "closed"
    }]
}

def getTasks(request):
    print(type(tasks))
    return JsonResponse(tasks)