from django.db import models

class Stage(models.Model):
    id_stage=models.AutoField(primary_key=True)
    libelle=models.CharField(max_length=50)
    order_stage=models.IntegerField(default=0)
    categorie=models.CharField(max_length=60,choices=(('OF','Officier'),('ODR','Officier du rang'),('EODR','Eleve officier du rang')))
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    class Meta:
        db_table = "stages"
    def __str__(self) -> str:
        return '%s' % self.libelle
    
class Specialite(models.Model):
    id_specialite=models.AutoField(primary_key=True)
    libelle=models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    class Meta:
        db_table = "specialites"
    def __str__(self) -> str:
        return '%s' % self.libelle
    
class Branche(models.Model):
    order=models.IntegerField(default=0)
    id_stage=models.ForeignKey(Stage,related_name='branches',on_delete=models.CASCADE)
    id_specialite=models.ForeignKey(Specialite,related_name='branches',on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    class Meta:
        db_table = "branches"

class Matiere(models.Model):
    id_matiere = models.AutoField(primary_key=True)
    libelle = models.CharField(max_length=255)
    id_branche=models.ForeignKey(Branche,related_name='matieres',on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    class Meta:
        db_table = "matieres"

    def __str__(self):
        return "%s" % (self.libelle)

