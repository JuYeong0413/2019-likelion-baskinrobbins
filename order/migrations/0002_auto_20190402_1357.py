# Generated by Django 2.0.13 on 2019-04-02 04:57

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('order', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='order',
            old_name='flavor',
            new_name='flavors',
        ),
    ]
