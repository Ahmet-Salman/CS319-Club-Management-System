
from datetime import datetime, timedelta

from apscheduler.schedulers.background import BackgroundScheduler
from django_apscheduler.jobstores import DjangoJobStore, register_events, register_job

from .models import DeleteClubRequest

scheduler = BackgroundScheduler()
scheduler.add_jobstore(DjangoJobStore(), "default")

@register_job(scheduler, "interval", seconds=3600)
def delete_request():
    for request in DeleteClubRequest.objects.all():
        # I assumed here that date_time is time when your object was created
        time_elapsed = datetime.now() - request.date_time
        if time_elapsed > timedelta(seconds=10):
            print("hello")
            #request.delete()

register_events(scheduler)
