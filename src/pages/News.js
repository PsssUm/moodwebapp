import React from 'react';
import NewsItem from './custom_views/NewsItem';
import '../resources/styles/news.css'
class News extends React.Component {
   
    constructor(props){
        super(props)
        this.state = {
            
        }
        this.openMap = this.openMap.bind(this);
    }
    openMap(){
        this.props.changePage("map")
    }
    render() {
        return (
            <div className="news_content">
                <div className="line_bg">
                     <div className="navbar_line line_bot_0"/>
                </div>
                
                {this.props.news.length > 0 && this.props.news.map((item, index) => (
                    <NewsItem openMap={this.openMap} openDetails={this.props.openDetails} index={index} podcast={item} key={index}/>
                ))}
            </div>
        );
    }
}
export default News;