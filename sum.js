var hesos = [ 60, 120, 26, 11, 9, 35, 25, 45, 60, 90, 100];
var sum = 0;
var dai;
var	rong;
$('#no1').change(function() {
	dai =  $('#no1').val();
	tinhTong();
	dientich();
	$('#totalcost').val((sum != 0) ? Math.ceil(sum) : 0);
});

$('#no2').change(function() {
	rong =  $('#no2').val();
	tinhTong();
	dientich();
	$('#totalcost').val((sum != 0) ? Math.ceil(sum) : 0);
});
// de trung bai
function dientich() {
	sum = 0;
	for (var i = 0; i < $('.game').length; i++) {

		money = (parseInt(dai) * parseInt(rong));
		if (($('#game'+(i)).is(':checked'))) {
			sum += money;
		}
	}
}
// de trung bai
function tinhTong() {
	sum = 0;
	for (var i = 0; i < $('.game').length; i++) {

		money = (parseInt(dai) + parseInt(rong))*2*hesos[i];
		if (($('#game'+(i)).is(':checked'))) {
			sum += money;
		}
	}
}

$('.game').click(function() {
	
	var index = $('.game').index(this);
	// tinh dien tich
	if ((index==0 && index==1) || (index==0 || index==1))
	{
		money=(parseInt(dai)*parseInt(rong))*hesos[index]/10;
	}
	// tinh chu vi
	else
		if(index!=5)// khong chon dong ho
		{
			money = (parseInt(dai) + parseInt(rong))*2*hesos[index]*10;
		}
		else 
			if(index==5) // chon dong ho
			{
				money=hesos[index]*1000;
			}
	if (!($('#game'+(index)).is(':checked'))) {
		money = -Math.round(money/1000)*1000;;
	}
	
	sum += Math.round(money/1000)*1000;
	//sum = Math.round(sum/1000)*1000;
	
 	$('#totalcost').val((sum != 0) ? Math.ceil(sum) : 0);
});



