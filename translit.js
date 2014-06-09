/*  
 By Rawanski [ra1almaty[-at-]gmail.com]
 @ra1ski

 www.rawanski.com   
*/

	var qazCollection = {
		'kk' : { 
			'а':'a','ә':'ä','б':'b','в':'v','г':'g',
			'ғ':'ğ','д':'d','е':'e','ё':'yo','ж':'j',
			'з':'z','и':'ï','й':'y`','к':'k','қ':'q',
			'л':'l','м':'m','н':'n','ң':'ñ','о':'o',
			'ө':'ö','п':'p','р':'r','с':'s','т':'t',
			'у':'w','ұ':'u','ү':'ü','ф':'f','х':'x',
			'һ':'h','ц':'с','ч':'ch','ш':'ş','щ':'şş',
			'ъ':'ʺ','ы':'ı','і':'i','ь':'ʹ','э':'é',
			'ю':'yu','я':'ya', 		
			'А': "A", 'Ә': "Ä", 'Б': "B", 'В': "V", 'Г': "G",
			'Ғ': "Ğ", 'Д': "D", 'Е': "E", 'Ё': "YO", 'Ж': "J",
			'З': "Z", 'И': "Ï", 'Й': "Y`", 'К': "K", 'Қ': "Q",
			'Л': "L", 'М': "M", 'Н': "N", 'Ң': "Ñ", 'О': "O", 
			'Ө': "Ö", 'П': "P", 'Р': "R", 'С': "S", 'Т': "T",
			'У': "W", 'Ұ': "U", 'Ү': "Ü", 'Ф': "F", 'Х': "X",
			'Һ': "H", 'Ц': "С", 'Ч': "CH", 'Ш': "Ş", 'Щ': "ŞŞ",
			'Ъ': "ʺ", 'Ы': "I", 'І': "I", 'Ь': "ʹ", 'Э': "É",
			'Ю': "YU",'Я': "YA"				
		}, 
		'tt' : {
			'а':'ا','ә':'ا','б':'ب','в':'ۆ','г':'گ',  
			'ғ':'ع','д':'د','е':'ە','ё':'ە','ж':'ج',  
			'з':'ز','и':'ي','й':'ي','к':'ك','қ':'ق',  
			'л':'ل','м':'م','н':'ن','ң':'ڭ','о':'و',  
			'ө':'وپ','п':'پ','р':'ر','с':'س','т':'ت',  
			'у':'ۋ','ұ':'ۇ','ү':'ۇ','ф':'ف','х':'ح',  
			'һ':'ھ','ц':'س','ч':'ch','ш':'ش','щ':'شش',
			'ъ':'','ы':'ى','і':'ى','ь':'','э':'ە',  
			'ю':'يۋ','я':'يا', 		 
			'А': "ا", 'Ә': "ا", 'Б': "ب", 'В': "ۆ", 'Г': "گ",
			'Ғ': "ع", 'Д': "د", 'Е': "E", 'Ё': "ە", 'Ж': "ج",
			'З': "ز", 'И': "ي", 'Й': "ي", 'К': "ك", 'Қ': "ق",
			'Л': "ل", 'М': "م", 'Н': "ن", 'Ң': "ڭ", 'О': "و", 
			'Ө': "وپ", 'П': "پ", 'Р': "ر", 'С': "S", 'Т': "ت",
			'У': "ۋ", 'Ұ': "ۇ", 'Ү': "ۇ", 'Ф': "ف", 'Х': "ح",
			'Һ': "ھ", 'Ц': "س", 'Ч': "CH", 'Ш': "ش", 'Щ': "شش",
			'Ъ': "", 'Ы': "ى", 'І': "I", 'Ь': "", 'Э': "ە",
			'Ю': "يۋ",'Я': "يا"					
		}	
	}; 
	
	var translate = function(str, type) 
	{
		var result = ''; 

		for(var i=0; i < str.length; i++) 
		{
			if(qazCollection[type][str[i]] != undefined) 
			{
				result += qazCollection[type][str[i]];
			} else {
				result += str[i] ;
			}
		} 

		return result;
	}  

	// Mısal
	var text = 'Қырғыз суретшісі Астанада 60 еңбегін көпшілік назарына ұсынады';

	text = translate(text, 'tt'); // 'tt' nemese 'kk'