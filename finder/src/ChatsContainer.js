import React, {Component} from 'react';
import Chat from './Chat';

class ChatsContainer extends Component{
    render(){
        return(
            <div className="chats">
                <Chat 
                name="Sara"
                message="Hi! Nice to meet you!"
                timestamp="25 minutes ago"
                profileImg="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/53419672_2101951359889771_4377274185244737536_n.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_ohc=1X5pCuSexgMAX9YDni_&_nc_ht=scontent-lga3-1.xx&oh=415c4a04206f577ed54bf9a46a920636&oe=5F61F994"
                />
                <Chat 
                name="Ellen"
                message="Hi, how are you doing?"
                timestamp="3 days ago"
                profileImg="https://e3.365dm.com/20/08/768x432/skynews-ellen-degeneres-golden-globes_5070536.jpg?20200818085258"
                />
                <Chat 
                name="Sandra"
                message="What's up?"
                timestamp="11 minutes ago"
                profileImg="https://upload.wikimedia.org/wikipedia/commons/3/3b/Sandra_Bullock_%289192365016%29_%28cropped%29.jpg"
                />
                <Chat 
                name="Alexandra"
                message="Hola!"
                timestamp="5 minutes ago"
                profileImg="https://pmcdeadline2.files.wordpress.com/2019/07/alexandra-daddario.jpg"
                />
            </div>
    
        )
    }
}

export default ChatsContainer;
