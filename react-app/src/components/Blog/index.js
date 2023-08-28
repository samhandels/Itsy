import React from 'react';
import './Blog.css';

function BlogSection() {
    return (
        <div className="blog-section">
            <a className="blog-header">Fresh from the blog -</a>

            <div className="blog-cards">
                <div className="blog-card">
                    <img src="https://i.etsystatic.com/inv/411136/5223390808/inv_fullxfull.5223390808_bmsfw7wx.jpg?version=0" alt="Jewelry blog post" />
                    <h1>Jewelry Trends of 2023</h1>
                    <p>Discover the latest in jewelry designs and the pieces that are making headlines this year.</p>
                </div>

                <div className="blog-card">
                    <img src="https://i.etsystatic.com/inv/6bfc9f/5200666391/inv_425x340.5200666391_gg25wspn.jpg?version=0" alt="Home decoration blog post" />
                    <h1>Revamp Your Space: Home Decor Tips</h1>
                    <p>Transform your space with these trending decor tips that breathe life into every corner of your home.</p>
                </div>

                <div className="blog-card">
                    <img src="https://i.etsystatic.com/inv/2be38b/5219759503/inv_fullxfull.5219759503_4hda37bo.jpg?version=0" alt="Martha Stewart's home improvement advice" />
                    <h1>Martha Stewart's Home Improvement Tips</h1>
                    <p>Learn from the guru herself on how to add value and beauty to your home with simple tweaks.</p>
                </div>
            </div>
        </div>
    );
}

export default BlogSection;
