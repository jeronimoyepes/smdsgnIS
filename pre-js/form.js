var contribAttached = document.querySelector(".contrib-coment-form #contrib-attached");
var contribPreview = document.querySelector(".contrib-coment-form .preview");


contribAttached.style.opacity = 0;

contribAttached.addEventListener('change', updateImageDisplay);

function updateImageDisplay() {

    while(contribPreview.firstChild) {
        contribPreview.removeChild(contribPreview.firstChild);
    }
    
    var curFiles = contribAttached.files;
    
    if(curFiles.length === 0) {
        
        var para = document.createElement('p');
        contribPreview.appendChild(para);
        
    } else {
        
        var list = document.createElement('ol');
        contribPreview.appendChild(list);
        
        for(var i = 0; i < curFiles.length; i++) {
            
            var listItem = document.createElement('li');
            var para = document.createElement('p');
            
            if(validFileType(curFiles[i])) {

                para.textContent = curFiles[i].name + ', Tamaño ' + returnFileSize(curFiles[i].size) + '.';
                var image = document.createElement('img');
                image.src = window.URL.createObjectURL(curFiles[i]);
                
                listItem.appendChild(para);
                
            } else {

                para.textContent = curFiles[i].name + ': Archivo no permitido, solo: .jpg .png .pdf .docx .xlsx .pptx .pps';
                listItem.appendChild(para);
                
            }
            
            list.appendChild(listItem);
        }
    }
}

var fileTypes = [
    'image/jpeg',
    'image/pjpeg',
    'image/png',
    'application/pdf',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.ms-powerpoint',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
]

function validFileType(file) {

    for(var i = 0; i < fileTypes.length; i++) {

        if(file.type === fileTypes[i]) {
            return true;
        }

    }
    
    return false;
}

function returnFileSize(number) {

    if(number < 1024) {

        return number + 'bytes';

    } else if(number >= 1024 && number < 1048576) {

        return (number/1024).toFixed(1) + 'KB';

    } else if(number >= 1048576) {

        return (number/1048576).toFixed(1) + 'MB';

    }

}