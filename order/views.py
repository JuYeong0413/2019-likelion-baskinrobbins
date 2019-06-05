from django.shortcuts import render

# Create your views here.
def select_container(request):
    return render(request, 'select_container.html')


def single_regular(request):
    return render(request, 'single_regular.html')


def single_king(request):
    return render(request, 'single_king.html')


def double_junior(request):
    return render(request, 'double_junior.html')


def double_regular(request):
    return render(request, 'double_regular.html')


def pint(request):
    return render(request, 'pint.html')


def quart(request):
    return render(request, 'quart.html')


def family(request):
    return render(request, 'family.html')


def half_gallon(request):
    return render(request, 'half_gallon.html')


def recommendation(request):
    return render(request, 'recommendation.html')


