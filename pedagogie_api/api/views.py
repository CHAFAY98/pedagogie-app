from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Stage
from .serializer import StageSerializer

@api_view(['GET'])
def get_stages(request):
    stages=Stage.objects.all()
    serializer=StageSerializer(stages,many=True)
    
    return Response(serializer.data)

@api_view(['POST'])
def add_stage(request):
    serializer=StageSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data,status=status.HTTP_201_CREATED)
    return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET','PUT','DELETE'])
def stage_detail(request,id_stage):
    try:
        stage=Stage.objects.get(pk=id_stage)
    except Stage.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method=='GET':
        serializer=StageSerializer(stage)
        return Response(serializer.data)
    elif request.method=='PUT':
        serializer=StageSerializer(stage,request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    elif request.method=='DELETE':
        stage.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)







    serializer=StageSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data,status=status.HTTP_201_CREATED)
    return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)