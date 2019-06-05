from django.db import models

class Order(models.Model):
    size = models.CharField(max_length=200, null=True)
    container = models.CharField(max_length=200, null=True)
    flavors = models.CharField(max_length=200, null=True)
    
    def flavors_as_list(self): ## 인스턴스 메소드로 자신의 인스턴스에서 flavors를 list 타입으로 바꿔주는 메소드에요 show_list.html 로 오세요
        return self.flavors.split(', ')