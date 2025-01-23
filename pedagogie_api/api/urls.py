from django.urls import path

from .views import *

urlpatterns = [
    path('stages',get_stages,name='get_stages'),
    path('stage/create',add_stage,name='add_stage'),
    path('stage/<int:id_stage>',stage_detail,name='detail_stage'),
]