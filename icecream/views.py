from django.shortcuts import render, redirect
from order.models import Order
# import pdb

# Create your views here.
def main(request):
    return render(request, 'main.html')


def order(request):
    return render(request, 'order.html')


def flavor_of_the_month(request):
    return render(request, 'flavor_of_the_month.html')


def show_list(request):
    context = {
        'orders': Order.objects.all()
    }
    return render(request, 'show_list.html', context)


def complete(request):
    if request.method == "POST":
        container = request.POST.get('container')
        size = request.POST.get('size')
        
        if container == "cone":
            container = "콘"
        else:
            if container == "cup":
                container = "컵"
            else:
                container = ""
        
        if size == "single_regular":
            size = "싱글레귤러"
        if size == "single_king":
            size = "싱글킹"
        if size == "double_junior":
            size = "더블주니어"
        if size == "double_regular":
            size = "더블레귤러"
        if size == "pint":
            size = "파인트"
        if size == "quart":
            size = "쿼터"
        if size == "family":
            size = "패밀리"
        if size == "half_gallon":
            size = "하프갤런"
        
        var = request.POST.getlist('flavor')
        # pdb.set_trace()
        
        flavors = []
        if '1' in var:
            flavors.append("베리 그래놀라")
        if '2' in var:
            flavors.append("스트로베리 아보카도")
        if '3' in var:
            flavors.append("쫀떡궁합")
        if '4' in var:
            flavors.append("누가 크런치")
        if '5' in var:
            flavors.append("카페브리즈 아이스크림")
        if '6' in var:
            flavors.append("몬스터 마시멜로")
        if '7' in var:
            flavors.append("너는 참 달고나")
        if '8' in var:
            flavors.append("봉쥬르 마카롱")
        if '9' in var:
            flavors.append("바람과 함께 사라지다")
        if '10' in var:
            flavors.append("엄마는 외계인")
        if '11' in var:
            flavors.append("이상한 나라의 솜사탕")
        if '12' in var:
            flavors.append("쿠키 앤 크림")
        if '13' in var:
            flavors.append("초코나무 숲")
        if '14' in var:
            flavors.append("31 요거트")
        if '15' in var:
            flavors.append("알폰소 망고")
        if '16' in var:
            flavors.append("피스타치오 아몬드")
        if '17' in var:
            flavors.append("월넛")
        if '18' in var:
            flavors.append("아몬드 봉봉")
        if '19' in var:
            flavors.append("사랑에 빠진 딸기")
        if '20' in var:
            flavors.append("베리베리 스트로베리")
        if '21' in var:
            flavors.append("민트 초콜릿 칩")
        if '22' in var:
            flavors.append("슈팅스타")
        if '23' in var:
            flavors.append("러브미")
        if '24' in var:
            flavors.append("레인보우 샤베트")
        if '25' in var:
            flavors.append("파핑파핑 바나나")
        if '26' in var:
            flavors.append("바닐라")
        if '27' in var:
            flavors.append("초콜릿")
        if '28' in var:
            flavors.append("뉴욕 치즈케이크")
        if '29' in var:
            flavors.append("그린티")
        if '30' in var:
            flavors.append("자모카 아몬드 훠지")
        if '31' in var:
            flavors.append("체리쥬빌레")
        if '32' in var:
            flavors.append("초콜릿 무스")
        if '33' in var:
            flavors.append("럭키 카라멜 터틀")
            
        str_flavors = ', '.join(str(x) for x in flavors)
        
        #flavor = str_flavors.split(',')
            
        order = Order.objects.create(size=size, container=container, flavors=str_flavors)
    
        redirect('complete')
        
    return render(request, 'complete.html', {'flavors': flavors, 'order' : order})
    
