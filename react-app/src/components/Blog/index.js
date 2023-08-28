import React from 'react';
import './Blog.css';

function BlogSection() {
    return (
        <div className="blog-section">
            <div className="blog-header">Fresh from the blog → </div>

            <div className="blog-cards">
                <div className="blog-card">
                    <img className='blog-image' src="https://i.etsystatic.com/inv/411136/5223390808/inv_fullxfull.5223390808_bmsfw7wx.jpg" alt="Jewelry blog post" />
                    <div className='blog-title' >Jewelry Pieces That Makes the Outfit From Enarmoured</div>
                    <div className='blog-text' >Discover the latest in jewelry designs and the pieces that are making headlines this year.</div>
                </div>

                <div className="blog-card">
                    <img className='blog-image' src="https://i.etsystatic.com/inv/6bfc9f/5200666391/inv_425x340.5200666391_gg25wspn.jpg" alt="Home decoration blog post" />
                    <div className='blog-title' >Revamp Your Space: Home Decor Tips for Any Event</div>
                    <div className='blog-text' >Transform your space with these trending decor tips that breathe life into every corner of your home.</div>
                </div>

                <div className="blog-card">
                    <img className='blog-image' src="https://i.etsystatic.com/inv/2be38b/5219759503/inv_fullxfull.5219759503_4hda37bo.jpg" alt="Martha Stewart's home improvement advice" />
                    <div className='blog-title' >Martha Stewart's Home Improvement Tips</div>
                    <div className='blog-text' >Learn from the guru herself on how to add value and beauty to your home with simple tweaks.</div>
                </div>
            </div>
        </div>
    );
}

export default BlogSection;
