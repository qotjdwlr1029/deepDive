var escapeSequence = [
    {
        type : '\\0',
        text : 'Null'
    },
    {
        type : '\\b',
        text : '백스페이스'
    },
    {
        type : '\\f',
        text : '폼피드<sup>Form Feed</sup>: 프린터로 출력할 경우 다음 페이지의 시작 지점으로 이동한다.'
    },
    {
        type : '\\n',
        text : '개행<sup>LF, Line Feed</sup>:다음 행으로 이동'
    },
    {
        type : '\\r',
        text : '개행<sup>CR, Carriage Return</sup>:커서를 처음으로 이동'
    },
    {
        type : '\\t',
        text : '탭(수평)'
    },
    {
        type : '\\v',
        text : '탭(수직)'
    },
    {
        type : '\\uXXXX',
        text : '유니코드'
    },
    {
        type : '\\\'',
        text : '작은따옴표'
    },
    {
        type : '\\\"',
        text : '큰따옴표'
    },
    {
        type : '\\\\',
        text : '백슬래시'
    }
]

window.onload = function(){
    
    var tbody = document.getElementById('escapeSequence');

    for( var i = 0; i<escapeSequence.length; i++){
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');

        td1.textContent = escapeSequence[i].type;
        td2.textContent = escapeSequence[i].text;

        tbody.appendChild(tr);
        tr.appendChild(td1);
        tr.appendChild(td2);
    }

}