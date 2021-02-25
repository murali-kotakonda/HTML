/*script to copy details from one correspondance address field to permanant address field */

function copyAddress(form)
{
    if(this.unchecked!=true)
    {
  /*script to copy details of country from correspondance address field to permanant address field */
    var x = document.getElementById("countrySelect");
    var i = x.selectedIndex;
    var y=document.getElementById("countrySelect1");
    var j =y.selectedIndex;
    y.options[j].text=x.options[i].text;
 /*script to copy details of state from correspondance address field to permanant address field */
    var state=document.getElementById("myState");
    var selectst=state.selectedIndex;
    var state1=document.getElementById("myState1");
    var newSe=state1.selectedIndex;
    state1.options[newSe].text=state.options[selectst].text;
  /*script to copy details of city from correspondance address field to permanant address field */
    var city=document.getElementById("cities");
    var cityname=city.selectedIndex;
    var city1=document.getElementById("cities1");
    var cityname1=city1.selectedIndex;
    city1.options[cityname1].text=city.options[cityname].text;
    form.pvillage.value=form.cvillage.value;
    form.ppin.value=form.cpin.value;
   /*script to disable fields in  permanant address field  after check box selected along with copying of fields*/

    document.getElementById("cities1").disabled=true;
    document.getElementById("myState1").disabled=true;
    document.getElementById("countrySelect1").disabled=true;
    document.getElementById("village").disabled=true;
    document.getElementById("pin").disabled=true;
    document.getElementById("button").disabled=true;
    }
   
}

/*Script logic to develop dynamic list of cities based on selected State in correspondance address*/
function changeCityList() {
  var cityList = {};
  cityList['AP'] = ['-----select-------','Amaravati','Anantapuram','Bhimavaram','Chilakaluripet','Chirala','Chittoor','Dharmavaram','Eluru','Gudivada',
  'Guntakal','Guntur','Hindupur','Kadapa','Kakinada','Kurnool','Machilipatnam','Madanapalle','Mangalagiri','Nandyal',
  'Narasaraopet','Nellore','Ongole','Proddatur','Rajamahendravaram','Srikakulam','Tadepalligudem','Tadipatri',
  'Tenali','Tirupati','Vijayawada','Visakhapatnam','Vizianagaram'];
  cityList['AR'] = ['Anjaw','Changlang','East Siang','Kurung Kumey','Lohit','Lower Dibang Valley','Lower Subansiri',
                    'Papum Pare','Tawang','Tirap','Dibang Valley','Upper Siang','Upper Subansiri','West Kameng',
                    'West Siang'];
  cityList['AS'] = ['Baksa','Barpeta','Bongaigaon','Cachar','Chirang','Darrang','Dhemaji','Dima Hasao','Dhubri','Dibrugarh',
                    'Goalpara','Golaghat','Hailakandi','Jorhat','Kamrup','Kamrup Metropolitan','Karbi Anglong',
                    'Karimganj','Kokrajhar','Lakhimpur','Marigaon','Nagaon','Nalbari','Sibsagar','Sonitpur','Tinsukia',
                    'Udalguri'];
  cityList['BI'] =['Araria','Arwal','Aurangabad','Banka','Begusarai','Bhagalpur','Bhojpur','Buxar','Darbhanga','East Champaran',
                    'Gaya','Gopalganj', 'Jamui', 'Jehanabad', 'Kaimur', 'Katihar', 'Khagaria', 'Kishanganj', 'Lakhisarai',
                    'Madhepura', 'Madhubani', 'Munger', 'Muzaffarpur', 'Nalanda', 'Nawada', 'Patna', 'Purnia', 'Rohtas', 
                    'Saharsa', 'Samastipur', 'Saran', 'Sheikhpura', 'Sheohar', 'Sitamarhi', 'Siwan', 'Supaul', 'Vaishali',
                    'West Champaran', 'Chandigarh'];
  cityList['CH'] =['Bastar', 'Bijapur', 'Bilaspur', 'Dantewada', 'Dhamtari', 'Durg', 'Jashpur', 'Janjgir-Champa', 'Korba',
                  'Koriya', 'Kanker', 'Kabirdham (Kawardha)', 'Mahasamund', 'Narayanpur', 'Raigarh', 'Rajnandgaon', 
                  'Raipur','Surguja'];
  
  cityList['DL'] =['Central Delhi', 'East Delhi', 'New Delhi', 'North Delhi', 'North East Delhi', 'North West Delhi', 
                    'South Delhi', 'South West Delhi', 'West Delhi'];
  cityList['GO'] =['North Goa','South Goa'];
  cityList['GU'] =['Ahmedabad', 'Amreli district', 'Anand', 'Banaskantha', 'Bharuch', 'Bhavnagar', 'Dahod', 'The Dangs', 
                  'Gandhinagar', 'Jamnagar', 'Junagadh', 'Kutch', 'Kheda', 'Mehsana', 'Narmada', 'Navsari', 'Patan', 'Panchmahal', 
                  'Porbandar', 'Rajkot', 'Sabarkantha', 'Surendranagar', 'Surat', 'Vyara', 'Vadodara', 'Valsad',];
  cityList['HA'] =['Ambala', 'Bhiwani', 'Faridabad', 'Fatehabad', 'Gurgaon', 'Hissar', 'Jhajjar', 'Jind', 'Karnal', 
                  'Kaithal', 'Kurukshetra', 'Mahendragarh', 'Mewat', 'Palwal', 'Panchkula', 'Panipat', 'Rewari', 
                  'Rohtak', 'Sirsa','Sonipat',  'Yamuna Nagar'];
  cityList['HI'] =['Bilaspur', 'Chamba', 'Hamirpur', 'Kangra', 'Kinnaur', 'Kullu', 'Lahaul and Spiti', 'Mandi',
                  'Shimla', 'Sirmaur', 'Solan', 'Una'];
  cityList['JH'] =['Bokaro', 'Chatra', 'Deoghar', 'Dhanbad', 'Dumka', 'East Singhbhum', 'Garhwa', 'Giridih', 'Godda',
                  'Gumla', 'Hazaribag', 'Jamtara', 'Khunti', 'Koderma', 'Latehar', 'Lohardaga', 'Pakur',
                  'Palamu', 'Ramgarh','Ranchi', 'Sahibganj', 'Seraikela Kharsawan', 'Simdega', 'West Singhbhum',];
  cityList['JK'] =['Anantnag', 'Badgam', 'Bandipora', 'Baramulla', 'Doda', 'Ganderbal', 'Jammu', 'Kargil', 'Kathua',
                  'Kishtwar', 'Kupwara', 'Kulgam', 'Leh', 'Poonch', 'Pulwama', 'Rajauri', 'Ramban', 'Reasi',
                  'Samba', 'Shopian','Srinagar', 'Udhampur'];
  cityList['KA'] =['Bagalkot', 'Bangalore Rural', 'Bangalore Urban', 'Belgaum', 'Bellary', 'Bidar', 'Bijapur',
                    'Chamarajnagar', 'Chikkamagaluru', 'Chikkaballapur', 'Chitradurga', 'Davanagere', 'Dharwad', 'Dakshina Kannada',
                    'Gadag', 'Gulbarga', 'Hassan', 'Haveri district', 'Kodagu', 'Kolar', 'Koppal', 'Mandya', 'Mysore', 'Raichur', 
                    'Shimoga', 'Tumkur', 'Udupi', 'Uttara Kannada', 'Ramanagara', 'Yadgir'];
  cityList['KE'] =['Alappuzha', 'Ernakulam', 'Idukki', 'Kannur', 'Kasaragod', 'Kollam', 'Kottayam', 'Kozhikode', 'Malappuram', 'Palakkad', 
                    'Pathanamthitta', 'Thrissur', 'Thiruvananthapuram', 'Wayanad'];
  cityList['MP'] =['Alirajpur', 'Anuppur', 'Ashok Nagar', 'Balaghat', 'Barwani', 'Betul', 'Bhind', 'Bhopal', 'Burhanpur',
                'Chhatarpur', 'Chhindwara', 'Damoh', 'Datia', 'Dewas', 'Dhar', 'Dindori', 'Guna', 'Gwalior', 'Harda', 'Hoshangabad', 
                'Indore', 'Jabalpur', 'Jhabua', 'Katni', 'Khandwa (East Nimar)', 'Khargone (West Nimar)', 'Mandla', 'Mandsaur', 
                'Morena', 'Narsinghpur', 'Neemuch', 'Panna', 'Rewa', 'Rajgarh', 'Ratlam', 'Raisen', 'Sagar', 'Satna', 'Sehore', 
                'Seoni', 'Shahdol', 'Shajapur', 'Sheopur', 'Shivpuri', 'Sidhi', 'Singrauli', 'Tikamgarh', 'Ujjain', 'Umaria', 
                'Vidisha'];
  cityList['MH'] =['Ahmednagar', 'Akola', 'Amravati', 'Aurangabad', 'Bhandara', 'Beed', 'Buldhana', 'Chandrapur', 'Dhule', 'Gadchiroli',
                  'Gondia', 'Hingoli', 'Jalgaon', 'Jalna', 'Kolhapur', 'Latur', 'Mumbai City', 'Mumbai suburban', 'Nandurbar', 'Nanded', 
                  'Nagpur', 'Nashik', 'Osmanabad', 'Parbhani', 'Pune', 'Raigad', 'Ratnagiri', 'Sindhudurg', 'Sangli', 'Solapur', 
                  'Satara', 'Thane', 'Wardha', 'Washim', 'Yavatmal'];
  cityList['MN'] =['Bishnupur', 'Churachandpur', 'Chandel', 'Imphal East', 'Senapati', 'Tamenglong', 'Thoubal', 'Ukhrul', 
                    'Imphal West'];
  cityList['MG'] =['East Garo Hills', 'East Khasi Hills', 'Jaintia Hills', 'Ri Bhoi', 'South Garo Hills', 'West Garo Hills',
                   'West Khasi Hills'];
  cityList['MZ'] =['Aizawl', 'Champhai', 'Kolasib', 'Lawngtlai', 'Lunglei', 'Mamit', 'Saiha', 'Serchhip'];
  cityList['NL'] =['Dimapur', 'Kohima', 'Mokokchung', 'Mon', 'Phek', 'Tuensang', 'Wokha', 'Zunheboto'];
  cityList['OD'] =['Angul', 'Boudh (Bauda)', 'Bhadrak', 'Balangir', 'Bargarh (Baragarh)', 'Balasore', 
                  'Cuttack', 'Debagarh (Deogarh)', 'Dhenkanal', 'Ganjam', 'Gajapati', 'Jharsuguda', 'Jajpur', 'Jagatsinghpur', 
                  'Khordha', 'Kendujhar (Keonjhar)', 'Kalahandi', 'Kandhamal', 'Koraput', 'Kendrapara', 'Malkangiri', 'Mayurbhanj',
                  'Nabarangpur', 'Nuapada', 'Nayagarh', 'Puri', 'Rayagada', 'Sambalpur', 'Subarnapur (Sonepur)', 'Sundergarh'];
  cityList['PN'] =['Amritsar', 'Barnala', 'Bathinda', 'Firozpur', 'Faridkot', 'Fatehgarh Sahib', 'Fazilka', 'Gurdaspur', 'Hoshiarpur',
                  'Jalandhar', 'Kapurthala', 'Ludhiana', 'Mansa', 'Moga', 'Sri Muktsar Sahib', 'Pathankot', 'Patiala', 'Rupnagar', 
                  'Ajitgarh (Mohali)', 'Sangrur', 'Nawanshahr', 'Tarn Taran'];
  cityList['RJ'] =['Ajmer', 'Alwar', 'Bikaner', 'Barmer', 'Banswara', 'Bharatpur', 'Baran', 'Bundi', 'Bhilwara', 'Churu', 'Chittorgarh',
                   'Dausa', 'Dholpur', 'Dungapur', 'Ganganagar', 'Hanumangarh', 'Jhunjhunu', 'Jalore', 'Jodhpur', 'Jaipur', 'Jaisalmer', 
                   'Jhalawar', 'Karauli', 'Kota', 'Nagaur', 'Pali', 'Pratapgarh', 'Rajsamand', 'Sikar', 'Sawai Madhopur', 'Sirohi', 'Tonk', 'Udaipur'];
  cityList['SK'] =['East Sikkim', 'North Sikkim','South Sikkim','West Sikkim'];
  cityList['TM'] =['Ariyalur', 'Chennai', 'Coimbatore', 'Cuddalore', 'Dharmapuri', 'Dindigul', 'Erode', 'Kanchipuram', 'Kanyakumari', 'Karur', 'Madurai', 
                  'Nagapattinam', 'Nilgiris', 'Namakkal', 'Perambalur', 'Pudukkottai', 'Ramanathapuram', 'Salem', 'Sivaganga', 'Tirupur', 'Tiruchirappalli', 'Theni', 'Tirunelveli', 
                  'Thanjavur', 'Thoothukudi', 'Tiruvallur', 'Tiruvarur', 'Tiruvannamalai', 'Vellore', 'Viluppuram', 'Virudhunagar'];
  cityList['TN'] =['Adilabad', 'Hyderabad', 'Karimnagar', 'Khammam','Mahbubnagar', 'Medak', 'Nalgonda','Nizamabad',  'Warangal'];
  cityList['TR'] =['Dhalai','North Tripura','South Tripura','Khowai','West Tripura'];
  cityList['UK'] =['Almora', 'Bageshwar', 'Chamoli', 'Champawat', 'Dehradun', 'Haridwar',
                     'Nainital', 'Pauri Garhwal', 'Pithoragarh', 'Rudraprayag', 'Tehri Garhwal', 'Udham Singh Nagar', 'Uttarkashi'];
  cityList['UP'] =['Agra', 'Allahabad', 'Aligarh', 'Ambedkar Nagar', 'Auraiya', 'Azamgarh', 'Barabanki', 'Budaun', 'Bagpat', 'Bahraich', 
                  'Bijnor', 'Ballia', 'Banda', 'Balrampur', 'Bareilly', 'Basti', 'Bulandshahr', 'Chandauli', 'Chhatrapati Shahuji Maharaj Nagar', 
                  'Chitrakoot', 'Deoria', 'Etah', 'Kanshi Ram Nagar', 'Etawah', 'Firozabad', 'Farrukhabad', 'Fatehpur', 'Faizabad',
                  'Gautam Buddh Nagar', 'Gonda', 'Ghazipur', 'Gorakhpur', 'Ghaziabad', 'Hamirpur', 'Hardoi', 'Mahamaya Nagar', 'Jhansi',
                  'Jalaun', 'Jyotiba Phule Nagar', 'Jaunpur district', 'Ramabai Nagar (Kanpur Dehat)', 'Kannauj', 'Kanpur', 'Kaushambi', 
                  'Kushinagar', 'Lalitpur', 'Lakhimpur Kheri', 'Lucknow', 'Mau', 'Meerut', 'Maharajganj', 'Mahoba', 'Mirzapur',
                  'Moradabad', 'Mainpuri', 'Mathura', 'Muzaffarnagar', 'Panchsheel Nagar district (Hapur)', 'Pilibhit', 'Shamli',
                  'Pratapgarh', 'Rampur', 'Raebareli', 'Saharanpur', 'Sitapur', 'Shahjahanpur', 'Sant Kabir Nagar', 'Siddharthnagar',
                  'Sonbhadra', 'Sant Ravidas Nagar', 'Sultanpur', 'Shravasti', 'Unnao', 'Varanasi'];
  cityList['WB'] =['Birbhum', 'Bankura', 'Bardhaman', 'Darjeeling', 'Dakshin Dinajpur', 'Hooghly', 'Howrah', 'Jalpaiguri', 'Cooch Behar', 
                  'Kolkata', 'Maldah', 'Paschim Medinipur', 'Purba Medinipur', 'Murshidabad', 'Nadia', 'North 24 Parganas', 
                  'South 24 Parganas', 'Purulia', 'Uttar Dinajpur'];
  

  
  /*Script logic to develop dynamic list of cities based on selected State in permanent address*/
    var stateOption = document.getElementById("myState");
    var cityOption = document.getElementById("cities");
    var selectedState = stateOption.options[stateOption.selectedIndex].value;
    while (cityOption.options.length) {
      cityOption.remove(0);
    }
    var  newCityList=cityList[selectedState];
    if (newCityList) {
      var i;
      for (i = 0; i < newCityList.length; i++) {
        var city = new Option(newCityList[i],i);
        cityOption.options.add(city);
      }
    }
  } 

  /* list of cities based on selected State code in permanent address*/

  function changeCityList1() {
    var cityList = {};
    cityList['AP'] = ['-----select-------','Amaravati','Anantapuram','Bhimavaram','Chilakaluripet','Chirala','Chittoor','Dharmavaram','Eluru','Gudivada',
  'Guntakal','Guntur','Hindupur','Kadapa','Kakinada','Kurnool','Machilipatnam','Madanapalle','Mangalagiri','Nandyal',
  'Narasaraopet','Nellore','Ongole','Proddatur','Rajamahendravaram','Srikakulam','Tadepalligudem','Tadipatri',
  'Tenali','Tirupati','Vijayawada','Visakhapatnam','Vizianagaram'];
  cityList['AR'] = ['Anjaw','Changlang','East Siang','Kurung Kumey','Lohit','Lower Dibang Valley','Lower Subansiri',
                    'Papum Pare','Tawang','Tirap','Dibang Valley','Upper Siang','Upper Subansiri','West Kameng',
                    'West Siang'];
  cityList['AS'] = ['Baksa','Barpeta','Bongaigaon','Cachar','Chirang','Darrang','Dhemaji','Dima Hasao','Dhubri','Dibrugarh',
                    'Goalpara','Golaghat','Hailakandi','Jorhat','Kamrup','Kamrup Metropolitan','Karbi Anglong',
                    'Karimganj','Kokrajhar','Lakhimpur','Marigaon','Nagaon','Nalbari','Sibsagar','Sonitpur','Tinsukia',
                    'Udalguri'];
  cityList['BI'] =['Araria','Arwal','Aurangabad','Banka','Begusarai','Bhagalpur','Bhojpur','Buxar','Darbhanga','East Champaran',
                    'Gaya','Gopalganj', 'Jamui', 'Jehanabad', 'Kaimur', 'Katihar', 'Khagaria', 'Kishanganj', 'Lakhisarai',
                    'Madhepura', 'Madhubani', 'Munger', 'Muzaffarpur', 'Nalanda', 'Nawada', 'Patna', 'Purnia', 'Rohtas', 
                    'Saharsa', 'Samastipur', 'Saran', 'Sheikhpura', 'Sheohar', 'Sitamarhi', 'Siwan', 'Supaul', 'Vaishali',
                    'West Champaran', 'Chandigarh'];
  cityList['CH'] =['Bastar', 'Bijapur', 'Bilaspur', 'Dantewada', 'Dhamtari', 'Durg', 'Jashpur', 'Janjgir-Champa', 'Korba',
                  'Koriya', 'Kanker', 'Kabirdham (Kawardha)', 'Mahasamund', 'Narayanpur', 'Raigarh', 'Rajnandgaon', 
                  'Raipur','Surguja'];
  
  cityList['DL'] =['Central Delhi', 'East Delhi', 'New Delhi', 'North Delhi', 'North East Delhi', 'North West Delhi', 
                    'South Delhi', 'South West Delhi', 'West Delhi'];
  cityList['GO'] =['North Goa','South Goa'];
  cityList['GU'] =['Ahmedabad', 'Amreli district', 'Anand', 'Banaskantha', 'Bharuch', 'Bhavnagar', 'Dahod', 'The Dangs', 
                  'Gandhinagar', 'Jamnagar', 'Junagadh', 'Kutch', 'Kheda', 'Mehsana', 'Narmada', 'Navsari', 'Patan', 'Panchmahal', 
                  'Porbandar', 'Rajkot', 'Sabarkantha', 'Surendranagar', 'Surat', 'Vyara', 'Vadodara', 'Valsad',];
  cityList['HA'] =['Ambala', 'Bhiwani', 'Faridabad', 'Fatehabad', 'Gurgaon', 'Hissar', 'Jhajjar', 'Jind', 'Karnal', 
                  'Kaithal', 'Kurukshetra', 'Mahendragarh', 'Mewat', 'Palwal', 'Panchkula', 'Panipat', 'Rewari', 
                  'Rohtak', 'Sirsa','Sonipat',  'Yamuna Nagar'];
  cityList['HI'] =['Bilaspur', 'Chamba', 'Hamirpur', 'Kangra', 'Kinnaur', 'Kullu', 'Lahaul and Spiti', 'Mandi',
                  'Shimla', 'Sirmaur', 'Solan', 'Una'];
  cityList['JH'] =['Bokaro', 'Chatra', 'Deoghar', 'Dhanbad', 'Dumka', 'East Singhbhum', 'Garhwa', 'Giridih', 'Godda',
                  'Gumla', 'Hazaribag', 'Jamtara', 'Khunti', 'Koderma', 'Latehar', 'Lohardaga', 'Pakur',
                  'Palamu', 'Ramgarh','Ranchi', 'Sahibganj', 'Seraikela Kharsawan', 'Simdega', 'West Singhbhum',];
  cityList['JK'] =['Anantnag', 'Badgam', 'Bandipora', 'Baramulla', 'Doda', 'Ganderbal', 'Jammu', 'Kargil', 'Kathua',
                  'Kishtwar', 'Kupwara', 'Kulgam', 'Leh', 'Poonch', 'Pulwama', 'Rajauri', 'Ramban', 'Reasi',
                  'Samba', 'Shopian','Srinagar', 'Udhampur'];
  cityList['KA'] =['Bagalkot', 'Bangalore Rural', 'Bangalore Urban', 'Belgaum', 'Bellary', 'Bidar', 'Bijapur',
                    'Chamarajnagar', 'Chikkamagaluru', 'Chikkaballapur', 'Chitradurga', 'Davanagere', 'Dharwad', 'Dakshina Kannada',
                    'Gadag', 'Gulbarga', 'Hassan', 'Haveri district', 'Kodagu', 'Kolar', 'Koppal', 'Mandya', 'Mysore', 'Raichur', 
                    'Shimoga', 'Tumkur', 'Udupi', 'Uttara Kannada', 'Ramanagara', 'Yadgir'];
  cityList['KE'] =['Alappuzha', 'Ernakulam', 'Idukki', 'Kannur', 'Kasaragod', 'Kollam', 'Kottayam', 'Kozhikode', 'Malappuram', 'Palakkad', 
                    'Pathanamthitta', 'Thrissur', 'Thiruvananthapuram', 'Wayanad'];
  cityList['MP'] =['Alirajpur', 'Anuppur', 'Ashok Nagar', 'Balaghat', 'Barwani', 'Betul', 'Bhind', 'Bhopal', 'Burhanpur',
                'Chhatarpur', 'Chhindwara', 'Damoh', 'Datia', 'Dewas', 'Dhar', 'Dindori', 'Guna', 'Gwalior', 'Harda', 'Hoshangabad', 
                'Indore', 'Jabalpur', 'Jhabua', 'Katni', 'Khandwa (East Nimar)', 'Khargone (West Nimar)', 'Mandla', 'Mandsaur', 
                'Morena', 'Narsinghpur', 'Neemuch', 'Panna', 'Rewa', 'Rajgarh', 'Ratlam', 'Raisen', 'Sagar', 'Satna', 'Sehore', 
                'Seoni', 'Shahdol', 'Shajapur', 'Sheopur', 'Shivpuri', 'Sidhi', 'Singrauli', 'Tikamgarh', 'Ujjain', 'Umaria', 
                'Vidisha'];
  cityList['MH'] =['Ahmednagar', 'Akola', 'Amravati', 'Aurangabad', 'Bhandara', 'Beed', 'Buldhana', 'Chandrapur', 'Dhule', 'Gadchiroli',
                  'Gondia', 'Hingoli', 'Jalgaon', 'Jalna', 'Kolhapur', 'Latur', 'Mumbai City', 'Mumbai suburban', 'Nandurbar', 'Nanded', 
                  'Nagpur', 'Nashik', 'Osmanabad', 'Parbhani', 'Pune', 'Raigad', 'Ratnagiri', 'Sindhudurg', 'Sangli', 'Solapur', 
                  'Satara', 'Thane', 'Wardha', 'Washim', 'Yavatmal'];
  cityList['MN'] =['Bishnupur', 'Churachandpur', 'Chandel', 'Imphal East', 'Senapati', 'Tamenglong', 'Thoubal', 'Ukhrul', 
                    'Imphal West'];
  cityList['MG'] =['East Garo Hills', 'East Khasi Hills', 'Jaintia Hills', 'Ri Bhoi', 'South Garo Hills', 'West Garo Hills',
                   'West Khasi Hills'];
  cityList['MZ'] =['Aizawl', 'Champhai', 'Kolasib', 'Lawngtlai', 'Lunglei', 'Mamit', 'Saiha', 'Serchhip'];
  cityList['NL'] =['Dimapur', 'Kohima', 'Mokokchung', 'Mon', 'Phek', 'Tuensang', 'Wokha', 'Zunheboto'];
  cityList['OD'] =['Angul', 'Boudh (Bauda)', 'Bhadrak', 'Balangir', 'Bargarh (Baragarh)', 'Balasore', 
                  'Cuttack', 'Debagarh (Deogarh)', 'Dhenkanal', 'Ganjam', 'Gajapati', 'Jharsuguda', 'Jajpur', 'Jagatsinghpur', 
                  'Khordha', 'Kendujhar (Keonjhar)', 'Kalahandi', 'Kandhamal', 'Koraput', 'Kendrapara', 'Malkangiri', 'Mayurbhanj',
                  'Nabarangpur', 'Nuapada', 'Nayagarh', 'Puri', 'Rayagada', 'Sambalpur', 'Subarnapur (Sonepur)', 'Sundergarh'];
  cityList['PN'] =['Amritsar', 'Barnala', 'Bathinda', 'Firozpur', 'Faridkot', 'Fatehgarh Sahib', 'Fazilka', 'Gurdaspur', 'Hoshiarpur',
                  'Jalandhar', 'Kapurthala', 'Ludhiana', 'Mansa', 'Moga', 'Sri Muktsar Sahib', 'Pathankot', 'Patiala', 'Rupnagar', 
                  'Ajitgarh (Mohali)', 'Sangrur', 'Nawanshahr', 'Tarn Taran'];
  cityList['RJ'] =['Ajmer', 'Alwar', 'Bikaner', 'Barmer', 'Banswara', 'Bharatpur', 'Baran', 'Bundi', 'Bhilwara', 'Churu', 'Chittorgarh',
                   'Dausa', 'Dholpur', 'Dungapur', 'Ganganagar', 'Hanumangarh', 'Jhunjhunu', 'Jalore', 'Jodhpur', 'Jaipur', 'Jaisalmer', 
                   'Jhalawar', 'Karauli', 'Kota', 'Nagaur', 'Pali', 'Pratapgarh', 'Rajsamand', 'Sikar', 'Sawai Madhopur', 'Sirohi', 'Tonk', 'Udaipur'];
  cityList['SK'] =['East Sikkim', 'North Sikkim','South Sikkim','West Sikkim'];
  cityList['TM'] =['Ariyalur', 'Chennai', 'Coimbatore', 'Cuddalore', 'Dharmapuri', 'Dindigul', 'Erode', 'Kanchipuram', 'Kanyakumari', 'Karur', 'Madurai', 
                  'Nagapattinam', 'Nilgiris', 'Namakkal', 'Perambalur', 'Pudukkottai', 'Ramanathapuram', 'Salem', 'Sivaganga', 'Tirupur', 'Tiruchirappalli', 'Theni', 'Tirunelveli', 
                  'Thanjavur', 'Thoothukudi', 'Tiruvallur', 'Tiruvarur', 'Tiruvannamalai', 'Vellore', 'Viluppuram', 'Virudhunagar'];
  cityList['TN'] =['Adilabad', 'Hyderabad', 'Karimnagar', 'Khammam','Mahbubnagar', 'Medak', 'Nalgonda','Nizamabad',  'Warangal'];
  cityList['TR'] =['Dhalai','North Tripura','South Tripura','Khowai','West Tripura'];
  cityList['UK'] =['Almora', 'Bageshwar', 'Chamoli', 'Champawat', 'Dehradun', 'Haridwar',
                     'Nainital', 'Pauri Garhwal', 'Pithoragarh', 'Rudraprayag', 'Tehri Garhwal', 'Udham Singh Nagar', 'Uttarkashi'];
  cityList['UP'] =['Agra', 'Allahabad', 'Aligarh', 'Ambedkar Nagar', 'Auraiya', 'Azamgarh', 'Barabanki', 'Budaun', 'Bagpat', 'Bahraich', 
                  'Bijnor', 'Ballia', 'Banda', 'Balrampur', 'Bareilly', 'Basti', 'Bulandshahr', 'Chandauli', 'Chhatrapati Shahuji Maharaj Nagar', 
                  'Chitrakoot', 'Deoria', 'Etah', 'Kanshi Ram Nagar', 'Etawah', 'Firozabad', 'Farrukhabad', 'Fatehpur', 'Faizabad',
                  'Gautam Buddh Nagar', 'Gonda', 'Ghazipur', 'Gorakhpur', 'Ghaziabad', 'Hamirpur', 'Hardoi', 'Mahamaya Nagar', 'Jhansi',
                  'Jalaun', 'Jyotiba Phule Nagar', 'Jaunpur district', 'Ramabai Nagar (Kanpur Dehat)', 'Kannauj', 'Kanpur', 'Kaushambi', 
                  'Kushinagar', 'Lalitpur', 'Lakhimpur Kheri', 'Lucknow', 'Mau', 'Meerut', 'Maharajganj', 'Mahoba', 'Mirzapur',
                  'Moradabad', 'Mainpuri', 'Mathura', 'Muzaffarnagar', 'Panchsheel Nagar district (Hapur)', 'Pilibhit', 'Shamli',
                  'Pratapgarh', 'Rampur', 'Raebareli', 'Saharanpur', 'Sitapur', 'Shahjahanpur', 'Sant Kabir Nagar', 'Siddharthnagar',
                  'Sonbhadra', 'Sant Ravidas Nagar', 'Sultanpur', 'Shravasti', 'Unnao', 'Varanasi'];
  cityList['WB'] =['Birbhum', 'Bankura', 'Bardhaman', 'Darjeeling', 'Dakshin Dinajpur', 'Hooghly', 'Howrah', 'Jalpaiguri', 'Cooch Behar', 
                  'Kolkata', 'Maldah', 'Paschim Medinipur', 'Purba Medinipur', 'Murshidabad', 'Nadia', 'North 24 Parganas', 
                  'South 24 Parganas', 'Purulia', 'Uttar Dinajpur'];
   /*Script logic to develop dynamic list of cities based on selected State in permanent address*/   
      var stateOption = document.getElementById("myState1");
      var cityOption = document.getElementById("cities1");
      var selectedState = stateOption.options[stateOption.selectedIndex].value;
      while (cityOption.options.length) {
        cityOption.remove(0);
      }
      var  newCityList=cityList[selectedState];
      if (newCityList) {
        var i;
        for (i = 0; i < newCityList.length; i++) {
          var city = new Option(newCityList[i],i);
          cityOption.options.add(city);
        }
      }
    } 