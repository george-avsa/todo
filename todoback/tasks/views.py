from calendar import month
from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from django.shortcuts import get_list_or_404, get_object_or_404
from .models import Tasks
from datetime import datetime
import json

def divide_date_time(date_time):
    return (str(date_time.date()), str(date_time.time()))


def getTasks(request):
    all_tasks = get_list_or_404(Tasks)
    tasks_dict = []
    for task in all_tasks:
        [start_date, start_time] = divide_date_time(task.start_date) 
        [deadline_date, deadline_time] = divide_date_time(task.deadline)
        tasks_dict.append({
            'name': task.name,
            'priority': task.priority.pr_name,
            'type': task.type.type_name,
            'status': task.status.status_name,
            'start_date': start_date,
            'start_time': start_time,
            'deadline_date': deadline_date,
            'deadline_time': deadline_time,
        })
    return JsonResponse({'tasks': tasks_dict})

def dateToString(date):
    months = ['January','February','March','April','May','June','July','August','September','October','November','December']
    return str(date.day) + ' ' + months[date.month-1] + ' ' + str(date.year) 

def getTask(request, timestamp):
    dt_object = datetime.fromtimestamp(int(timestamp[:-3]))
    tasks = Tasks.objects.filter(deadline__year=dt_object.year, deadline__month=dt_object.month, deadline__day=dt_object.day)
    tasks_dict = []
    for task in tasks:
        [start_date, start_time] = divide_date_time(task.start_date) 
        [deadline_date, deadline_time] = divide_date_time(task.deadline)
        tasks_dict.append({
            'name': task.name,
            'priority': task.priority.pr_name,
            'type': task.type.type_name,
            'status': task.status.status_name,
            'start_date': start_date,
            'start_time': start_time,
            'deadline_date': deadline_date,
            'deadline_time': deadline_time,
        })
    print(tasks_dict)
    return JsonResponse({'day': dateToString(dt_object), 'tasks': tasks_dict})