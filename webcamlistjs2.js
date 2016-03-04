//This file holds the list of cameras, links, and locations

var cameras = [
//Landmarks
["Mckeldin Mall Camera", hyperlink('http://129.2.16.181/'),
38.986065, -76.944773, 'unsecured'],

["North Campus Diner", hyperlink('http://128.8.230.14/'), 
//Location not accurate
38.992487, -76.946588, 'unsecured'],

//CHE Cameras
["CHE 2140 Lounge Camera", hyperlink("http://129.2.64.48/"),
38.990372, -76.939155, 'secured'],

//EGR Cameras
["EGR 0312 Computer Lab Camera", hyperlink("http://129.2.102.242/"),
38.989020, -76.937998, 'secured'],

//JMP Cameras
['JMP 1116 Classroom Camera', 
hyperlink("http://128.8.181.233/"),
38.990433, -76.940013, 'secured'],
['JMP 1215 Classroom Camera', 
hyperlink("http://128.8.181.226/"),
38.990739, -76.940325, 'secured'],
['JMP 3201 Security room next to Classroom', 
hyperlink("http://128.8.180.2/"), 
38.990624, -76.940331, 'secured'],
['JMP 3216a Lounge Camera',
hyperlink("http://128.8.180.17/"),
38.990604, -76.940278, 'secured'],

//Kim Cameras
['Front view of Kim',
hyperlink("http://129.2.122.140/"),
38.990462, -76.937081, 'unsecured'],
['Kim 2107 Classroom Camera',
hyperlink("http://128.8.138.132/"),
38.991059, -76.937792, 'secured'],
['Kim 2111 Classroom Camera',
hyperlink("http://128.8.138.131/"),
38.991057, -76.937655, 'secured'],
['Clark Hall Construction Camera',
hyperlink('http://128.8.139.8/'),
38.991281, -76.937714, 'unsecured'],

//Off campus cameras
/*********************************************************************/
/*ALERT!!!These cameras need to be fixed!!! They are not AXIS cameras*/
/*********************************************************************/
['BookHolders Camera, Route 1 View', 
hyperlink("http://www.bookholders.com/camera1.asp"), 
38.981580, -76.937563, 'unsecured'],
['BookHolders Camera, Regents Dr. and Baltimore Ave', 
hyperlink("http://www.bookholders.com/camera4.asp"), 
38.981702, -76.937554, 'unsecured']

];

var storyText = '<h1 id="firstHeading" class="firstHeading">The Story</h1>' +
'<p>This website was launched on 2/18/2016 under a different domain in' +
' hopes to raise awareness about surveillance at UMD. When this website' +
' was made public it was fully functional.' +
' Several hours after the launch, concerned students at UMD' +
' contacted authorities, and most of the webcams on this site' +
' became password protected. Now only a few unsecured cameras remain.' +
'</p>' +

'<p><b>Camera Colors</b><br/>' +
'The cameras with green dots are not password protected. The cameras with' +
' red dots are password protected. All cameras were publicly accessible' +
' online until the University secured most of them.</p>' +

'<p><b>Cameras with unknown locations:</b><br/>' +
'Lab with TEM ' + hyperlinkJustText('http://128.8.138.24/') + '<br/>' +
'Labcoat room ' + hyperlinkJustText('http://128.8.138.26/') + '<br/>' +
'Lab and Microscope ' + hyperlinkJustText('http://128.8.139.40/') + '<br/>' +
'LFabLab ' + hyperlinkJustText('http://128.8.139.239/') + '<br/>' +
'Another lab ' + hyperlinkJustText('http://128.8.139.240/') + '<br/>' +
'Yet another lab ' + hyperlinkJustText('http://128.8.139.241/') + '<br/></p>';

var unknownLocationCameras = ['The Story and Cameras with unknown locations:', 
storyText,
38.985988, -76.942364];

//hyperlink function adds hyperlink tag and opens in new tab
function hyperlinkPhoto(photo, website){
	return '<a href="' + website + '" target="_blank">' +
	   	'<img src="' + photo + '">' +
	   	'</a>';
}

//Use if no preview is available
function hyperlinkJustText(website){
	return '<a href="' + website + 
	'" target="_blank">link to camera</a>';
}

//hyperlink text and a photo
function hyperlink(website){
	return '<a href="' + website + 
	'" target="_blank">' + 
	'<img src="' + website +
	'/axis-cgi/mjpg/video.cgi?resolution=320x240">' + 
	'<br/>link if quickview is not working</a>';
}