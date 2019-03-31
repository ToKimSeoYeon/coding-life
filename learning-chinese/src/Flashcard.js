import React, { Component } from 'react'; // Component는 클래스가 있을 때 쓴다.



const toneCharMap = {};
toneCharMap['a']='āáǎà';
toneCharMap['e']='ēéěè';
toneCharMap['i']='īíǐì';
toneCharMap['o']='ōóǒò';
toneCharMap['u']='ūúǔù';
toneCharMap['ü']='ǖǘǚǜ';
toneCharMap['m']=' ḿ  ';
toneCharMap['n']=' ńňǹ';


class FlashcardComponent extends Component {

    componentWillMount(){
        this.f_markTone();
    }

    render(){
        return(
            <div>
                <ForwardcardComponent trandi={this.props.trandi}/>
                <BackwardComponent />
            </div>
        )
    }

    f_markTone() {
        console.log(this.props.trandi);
        console.log(this.props.simplified);
        console.log(this.props.eWriting_toneNum);
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
        console.log(match);
        
        
    }
}


function ForwardcardComponent({trandi, simplified, eWriting_toneNum, pronounce}) {
    return(
        <div>
            this is forwardcard
        </div>
    )
}

function BackwardComponent() {
    return(
        <div>
            this is backward
        </div>
    )
}



export default FlashcardComponent;