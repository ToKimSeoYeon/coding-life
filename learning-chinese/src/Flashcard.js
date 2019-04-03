import React, { Component } from 'react'; // Component는 클래스가 있을 때 쓴다.






class FlashcardComponent extends Component {
    state = {
        eWriting: "",
        toneNum: ""
    }

    componentDidMount(){
        this.f_patternMatch();
    }

    render(){
        return(
            <div>
                <HanzaComponent />
                <SimplifiedComponent />
                <PronounceComponent eWriting={this.state.eWriting} toneNum={this.state.toneNum} f_markTone={this.f_markTone}/>
                <HangulComponent />
            </div>
        )
    }

    f_patternMatch = async () => {
        const eWriting_toneNum = this.props.eWriting_toneNum;
        const patt = /\b([a-z]{1,6})([1-5])\b/i;
        // \b => 단어 경계에 대응 된다고 하는데 무슨소리인지 모르겠음
        // 양쪽/(슬래쉬) => 정규식을 표현하는 구간
        // () => 묶는 단위
        // [a-z] => a부터 z까지 대응
        // {1,6} => 앞 문자가 최소 1개, 최대 6개가 나타나는 부분에 대응됩니다
        // [1-5] => 1부터 5까지 대응
        // i => 대소문자 구분 없이 

        const match = patt.exec(eWriting_toneNum);
        // 패턴매칭 시킨뒤에는 매칭된 값에따라 자동으로 array가 만들어진다.

        if(match){
            
            await this.setState({
                eWriting : match[1],
                toneNum : match[2]
             });
            // this.f_markTone(eWriting, toneNum);
            // console.log(this.f_markTone(eWriting, toneNum));
        }
        

    }

    f_markTone(eWriting, toneNum) {
        const toneCharMap = {};
        toneCharMap['a']='āáǎà';
        toneCharMap['e']='ēéěè';
        toneCharMap['i']='īíǐì';
        toneCharMap['o']='ōóǒò';
        toneCharMap['u']='ūúǔù';
        toneCharMap['ü']='ǖǘǚǜ';
        toneCharMap['m']=' ḿ  ';
        toneCharMap['n']=' ńňǹ';

        if (toneNum < 1 || toneNum > 5 || eWriting.length < 1) {
            return eWriting + toneNum; // 발음을 표시하는 글자가 아니므로 그냥 그대로 return
        }
        eWriting = eWriting.replace('v', 'ü'); // 글자 쓸 때 v를 쓰면 ü 변환해줌
        if (toneNum === 5) {
            return eWriting; // tone이 없는것
        }
        let charToReplace;
        const erased_eWriting = eWriting.replace(/[^aeiouü]/g, ''); // eWriting글자에서 /[^aeiouü]/g에 일치하는 부분을 제외하고 나머지를 공백으로 바꿈
        // console.log(erased_eWriting); // => ming2 일때 i 출력
        
        
        switch (erased_eWriting.length) {
            case 0:
                charToReplace = eWriting.charAt(0); // 일치하는 모음이 한개도 없을 땐 그냥 그대로 출력
                break;
            case 1:
                charToReplace = erased_eWriting.charAt(0); // 일치하는 모음이 한개 있으면 그 한 개 모음 출력
                break;
            default: // 모음이 2개이상 일 때
                if (erased_eWriting.indexOf("a") >= 0) {
                    charToReplace = 'a';
                }
                else if (erased_eWriting.indexOf("e") >= 0) {
                    charToReplace = 'e';
                }
                else if (erased_eWriting.indexOf("ou") >= 0) {
                    charToReplace = 'o';
                }
                else {
                    charToReplace = erased_eWriting.charAt(1);
                }
        }
        const tonesStr = toneCharMap[charToReplace];
        const replacementChar = tonesStr == null ? null : tonesStr.charAt(toneNum - 1);
        if (replacementChar === null || replacementChar === ' ') {
            return eWriting + toneNum;
        }
        else {
            return eWriting.replace(charToReplace, replacementChar);
        }
        
        
    }
}


function HanzaComponent() {
    return(
        <div>
            Hanza
        </div>
    )
}

function SimplifiedComponent() {
    return(
        <div>
            Simplified
        </div>
    )
}

function PronounceComponent({eWriting, toneNum, f_markTone}) {
    return(
        <div>
            {f_markTone(eWriting,toneNum)}
        </div>
    )
}

function HangulComponent() {
    return(
        <div>
            Hangul
        </div>
    )
}




export default FlashcardComponent;