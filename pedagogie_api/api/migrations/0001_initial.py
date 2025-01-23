# Generated by Django 5.1.5 on 2025-01-23 01:21

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Branche',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('order', models.IntegerField(default=0)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
            options={
                'db_table': 'branches',
            },
        ),
        migrations.CreateModel(
            name='Specialite',
            fields=[
                ('id_specialite', models.AutoField(primary_key=True, serialize=False)),
                ('libelle', models.CharField(max_length=50)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
            options={
                'db_table': 'specialites',
            },
        ),
        migrations.CreateModel(
            name='Stage',
            fields=[
                ('id_stage', models.AutoField(primary_key=True, serialize=False)),
                ('libelle', models.CharField(max_length=50)),
                ('order_stage', models.IntegerField(default=0)),
                ('categorie', models.CharField(choices=[('OF', 'Officier'), ('ODR', 'Officier du rang'), ('EODR', 'Eleve officier du rang')], max_length=60)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
            options={
                'db_table': 'stages',
            },
        ),
        migrations.CreateModel(
            name='Matiere',
            fields=[
                ('id_matiere', models.AutoField(primary_key=True, serialize=False)),
                ('libelle', models.CharField(max_length=255)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('id_branche', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='matieres', to='api.branche')),
            ],
            options={
                'db_table': 'matieres',
            },
        ),
        migrations.AddField(
            model_name='branche',
            name='id_specialite',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='branches', to='api.specialite'),
        ),
        migrations.AddField(
            model_name='branche',
            name='id_stage',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='branches', to='api.stage'),
        ),
    ]
