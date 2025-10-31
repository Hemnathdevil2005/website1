import React, { useState } from 'react';
import './App.css';

const styles = {
   
    body: {
        margin: 0,
        fontFamily: 'Inter, sans-serif',
        backgroundColor: '#f7f7f7',
        color: '#333',
    },
    navLink: {
        fontSize: '15px',
        fontWeight: 500,
        color: '#333',
        textDecoration: 'none',
        position: 'relative',
    },
    navLinkActive: {
        color: '#000',
        fontWeight: 600,
    },
    navLinkAfter: {
        content: "''",
        position: 'absolute',
        left: 0,
        bottom: '-8px',
        width: '100%',
        height: '3px',
        backgroundColor: '#000',
        borderRadius: '2px',
    },
    btn: {
        padding: '10px 20px',
        borderRadius: '20px',
        fontSize: '15px',
        fontWeight: 500,
        cursor: 'pointer',
        textDecoration: 'none',
        border: 'none',
        display: 'inline-block',
        textAlign: 'center',
    },
    btnPrimary: {
        backgroundColor: '#0055ff',
        color: 'white',
    },
    btnSecondary: {
        backgroundColor: 'white',
        color: '#0055ff',
        border: '1px solid #0055ff',
    },
    card: {
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    },
    sectionTitle: {
        fontSize: '12px',
        color: '#666',
        marginTop: 0,
        marginBottom: '15px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
   
    navbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 20px',
        height: '60px',
        backgroundColor: 'white',
        borderBottom: '1px solid #f0f0f0',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
    },
    navLeft: {
        display: 'flex',
        alignItems: 'center',
        gap: '25px',
    },
    logoText: {
        fontSize: '24px',
        fontWeight: 600,
        color: '#0055ff',
        textDecoration: 'none',
    },
    navLinks: {
        display: 'flex',
        alignItems: 'center',
        gap: '25px',
    },
    searchContainer: {
        flexGrow: 1,
        maxWidth: '600px',
        margin: '0 40px',
        position: 'relative',
    },
    searchInput: {
        width: '100%',
        height: '40px',
        padding: '0 15px 0 40px',
        border: 'none',
        borderRadius: '8px',
        backgroundColor: '#f3f3f3',
        fontSize: '15px',
        color: '#333',
        
    },
    searchIcon: {
        position: 'absolute',
        left: '15px',
        top: '50%',
        transform: 'translateY(-50%)',
        color: '#777',
    },
    navRight: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
    },
   
    mainContainer: {
        display: 'flex',
        justifyContent: 'center',
        padding: '40px 80px',
        position: 'relative',
    },
    content: {
        maxWidth: '900px',
    },
    contentImg: {
        width: '100%',
        borderRadius: '10px',
        marginBottom: '20px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    },
   
    actionSidebar: {
        position: 'fixed',
        right: '20px',
        top: '120px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: '15px 8px',
        borderRadius: '10px',
        boxShadow: '0 3px 10px rgba(0,0,0,0.08)',
        gap: '20px',
        width: '85px',
        zIndex: 999,
   
        '@media (maxWidth: 1024px)': {
            display: 'none',
        },
    },
    profileFollowGroup: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '6px',
    },
    profilePicContainer: {
        position: 'relative',
        width: '55px',
        height: '55px',
        borderRadius: '50%',
        overflow: 'hidden',
        backgroundColor: '#f0f0f0',
    },
    profilePic: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    addFollowIcon: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: '#0055ff',
        color: 'white',
        borderRadius: '50%',
        width: '18px',
        height: '18px',
        fontSize: '11px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '2px solid white',
    },
    actionItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textDecoration: 'none',
        color: '#333',
        gap: '5px',
    },
    actionCircle: {
        width: '45px',
        height: '45px',
        borderRadius: '50%',
        backgroundColor: '#f0f0f0',
        border: '1px solid #e0e0e0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '18px',
        transition: 'background-color 0.2s',
        cursor: 'pointer',
    },
    appreciatedCircle: {
        width: '45px',
        height: '45px',
        borderRadius: '50%',
        backgroundColor: '#333',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '16px',
        cursor: 'pointer',
    },
    actionItemSpan: {
        fontSize: '12px',
    },
   
    footer: {
        backgroundColor: '#161616',
        color: '#ddd',
        padding: '60px 8% 20px',
        marginTop: '80px',
    },
    footerTop: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '40px',
        marginBottom: '40px',
    },
    footerH3: {
        color: '#fff',
        fontSize: '1.1rem',
        marginBottom: '15px',
    },
    footerUl: {
        listStyle: 'none',
        padding: 0,
    },
    footerLi: {
        marginBottom: '10px',
    },
    footerA: {
        color: '#bbb',
        textDecoration: 'none',
        transition: 'color 0.3s',
        '&:hover': {
            color: '#fff',
        }
    },
    footerBottom: {
        borderTop: '1px solid #333',
        paddingTop: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        fontSize: '0.85rem',
        color: '#999',
    },
 
    topHeader: {
        backgroundColor: '#000',
        color: '#fff',
        padding: '20px 0',
        textAlign: 'center',
        maxWidth: '900px',
        margin: '0 auto 40px auto',
        borderRadius: '10px',
    },
    likeButtonContainer: {
        marginBottom: '20px',
    },
    likeButton: {
        backgroundColor: '#333',
        border: 'none',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        fontSize: '20px',
        color: '#ccc',
        marginBottom: '5px',
        transition: 'background-color 0.2s, color 0.2s',
    },
    likeCount: {
        fontSize: '14px',
        color: '#aaa',
        display: 'block',
    },
    projectTitleHeader: {
        fontSize: '28px',
        fontWeight: 600,
        margin: 0,
        marginBottom: '10px',
    },
    projectStatsHeader: {
        fontSize: '15px',
        color: '#aaa',
        marginBottom: '10px',
    },
    publishedDateHeader: {
        fontSize: '13px',
        color: '#777',
    },
   
    authorSection: {
        backgroundColor: '#fff',
        padding: '20px 40px',
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid #eee',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
        maxWidth: '900px',
        margin: '0 auto 40px auto',
        borderRadius: '8px',
    },
    authorProfilePic: {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        marginRight: '15px',
        objectFit: 'cover',
        backgroundColor: '#ccc',
    },
    authorInfo: {
        flexGrow: 1,
    },
    authorName: {
        fontWeight: 600,
        fontSize: '16px',
        margin: 0,
        color: 'black',
    },
    followButton: {
        backgroundColor: '#0055ff',
        color: 'white',
        border: 'none',
        padding: '8px 18px',
        borderRadius: '5px',
        cursor: 'pointer',
        fontWeight: 500,
        fontSize: '14px',
        transition: 'background-color 0.2s',
    },
  
    ownerSection: {
        width: '300px',
        flexShrink: 0,
    },
    profileInfo: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '25px',
    },
    profilePic: {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        marginRight: '10px',
        objectFit: 'cover',
        backgroundColor: '#ccc',
        border: '2px solid #fff',
    },
    profileName: {
        fontWeight: 600,
        margin: 0,
        fontSize: '17px',
        color: 'black',
    },
    profileLocation: {
        fontSize: '13px',
        color: '#666',
        margin: 0,
    },
    btnDetail: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: '12px',
        marginBottom: '10px',
        border: 'none',
        borderRadius: '8px',
        fontWeight: 'bold',
        cursor: 'pointer',
        textAlign: 'center',
        transition: 'background-color 0.2s, opacity 0.2s',
        fontSize: '15px',
    },
    btnFollowDetail: {
        backgroundColor: '#0055ff',
        color: 'white',
    },
    btnHireDetail: {
        backgroundColor: 'white',
        color: '#0055ff',
        border: '1px solid #0055ff',
    },
    projectInfoSection: {
        width: '300px',
        marginTop: '20px',
    },
    projectTitleDetail: {
        fontWeight: 600,
        fontSize: '18px',
        marginTop: 0,
        marginBottom: '5px',
    },
    projectStats: {
        marginBottom: '10px',
        fontSize: '14px',
        color: '#444',
    },
    publishedDate: {
        fontSize: '12px',
        color: '#777',
    },
    toolsSection: {
        flexGrow: 1,
     
    },
    toolsList: {
        fontWeight: 'bold',
        marginTop: 0,
    },
    creativeFieldTag: {
        backgroundColor: '#333',
        color: 'white',
        padding: '10px',
        marginBottom: '5px',
        borderRadius: '4px',
        textAlign: 'center',
        fontWeight: 'bold',
        cursor: 'pointer',
    },
    tag: {
        backgroundColor: '#f0f0f0',
        padding: '5px 10px',
        borderRadius: '12px',
        fontSize: '14px',
        color: 'black',
        display: 'inline-block',
        margin: '5px',
        cursor: 'pointer',
    }
};


const Navbar = () => (
    <nav style={styles.navbar}>
        <div style={styles.navLeft}>
            <a href="#" style={styles.logoText}>Bēhance</a>
            <div style={styles.navLinks}>
                <a href="#" style={{ ...styles.navLink, ...styles.navLinkActive, position: 'relative' }}>
                    Explore
                    {}
                    <span style={styles.navLinkAfter}></span>
                </a>
                <a href="#" style={styles.navLink}>Jobs</a>
                <a href="#" style={styles.navLink}>Resources</a>
                <a href="#" style={styles.navLink}>Hire</a>
            </div>
        </div>
        <div style={styles.searchContainer}>
            <i className="fas fa-search" style={styles.searchIcon}></i>
            <input type="text" style={styles.searchInput} placeholder="Search..." />
        </div>
        <div style={styles.navRight}>
            <a href="#" style={{ ...styles.btn, ...styles.btnPrimary }}>Start Free Trial</a>
            <a href="#" style={{ ...styles.btn, ...styles.btnSecondary }}>Sign In</a>
        </div>
    </nav>
);


const ActionSidebar = () => {

    return (
        <div style={styles.actionSidebar}>
            <div style={styles.profileFollowGroup}>
                <div style={styles.profilePicContainer}>
                    {}
                    <img src="hem.png" alt="Profile Picture" style={styles.profilePic} />
                    <div style={styles.addFollowIcon}><i className="fas fa-plus"></i></div>
                </div>
                <span style={styles.actionItemSpan}>Follow</span>
            </div>

            {[
                { icon: "fas fa-envelope", text: "Hire" },
                { icon: "fas fa-tools", text: "Tools" },
                { icon: "fas fa-folder", text: "Save" },
                { icon: "fas fa-upload", text: "Share" },
            ].map((item, index) => (
                <a key={index} href="#" style={styles.actionItem}>
                    <div style={styles.actionCircle}><i className={item.icon}></i></div>
                    <span style={styles.actionItemSpan}>{item.text}</span>
                </a>
            ))}

            <a href="#" style={styles.actionItem}>
                <div style={styles.appreciatedCircle}>
                    <i className="fas fa-thumbs-up"></i>
                    <span style={{ fontSize: '10px' }}>1</span>
                </div>
                <span style={styles.actionItemSpan}>Appreciated</span>
            </a>
        </div>
    );
};


const ProjectGallery = () => {
    const images = [
        'img1.png', 'img2.png', 'img3.png', 'img4.png', 'img5.png',
        'img6.png', 'img7.png', 'img8.png', 'img9.png'
    ];

    return (
        <div style={styles.mainContainer}>
            <div style={styles.content}>
                {images.map((img, index) => (
                  
                    <img key={index} src={img} alt={`Project Image ${index + 1}`} style={styles.contentImg} />
                ))}
            </div>
            <ActionSidebar />
        </div>
    );
};


const ProjectHeader = ({ likes, views, comments, date }) => {
    const [likeCount, setLikeCount] = useState(likes);
    const [isLiked, setIsLiked] = useState(false);

    const handleLike = () => {
        if (!isLiked) {
            setLikeCount(likeCount + 1);
        } else {
            setLikeCount(likeCount - 1);
        }
        setIsLiked(!isLiked);
    };

    return (
        <header style={styles.topHeader}>
            <div style={styles.likeButtonContainer}>
                <button
                    style={{
                        ...styles.likeButton,
                        backgroundColor: isLiked ? '#0055ff' : '#333',
                        color: isLiked ? 'white' : '#ccc',
                    }}
                    onClick={handleLike}
                >
                    <i className="fas fa-thumbs-up"></i>
                </button>
                <span style={styles.likeCount}>{likeCount}</span>
            </div>
            <h1 style={styles.projectTitleHeader}>mr Studios | Landing Page</h1>
            <p style={styles.projectStatsHeader}>
                <i className="fas fa-eye"></i> {views}
                &bull; <i className="fas fa-comment"></i> {comments}
            </p>
            <p style={styles.publishedDateHeader}>Published: {date}</p>
        </header>
    );
};


const AuthorSection = ({ authorName, authorPic }) => (
    <section style={styles.authorSection}>
        <img src={authorPic} alt={authorName} style={styles.authorProfilePic} />
        <div style={styles.authorInfo}>
            <p style={styles.authorName}>{authorName}</p>
        </div>
        <button style={styles.followButton}>Follow</button>
    </section>
);
const DetailsSidebar = ({ project }) => {
    return (
        <div style={{ ...styles.mainContainer, padding: '40px 80px', maxWidth: 'unset', justifyContent: 'center' }}>
            <div style={styles.mainContent}>
                <div>
                    {/* Owner Section */}
                    <div style={{ ...styles.ownerSection, ...styles.card }}>
                        <h4 style={styles.sectionTitle}>OWNER</h4>
                        <div style={styles.profileInfo}>
                            <img src={project.owner.pic} alt={project.owner.name} style={styles.profilePic} />
                            <div style={styles.profileDetails}>
                                <p style={styles.profileName}>{project.owner.name}</p>
                                <p style={styles.profileLocation}>📍 {project.owner.location}</p>
                            </div>
                        </div>
                        <button style={{ ...styles.btnDetail, ...styles.btnFollowDetail }}>
                            <i className="fas fa-plus"></i> Follow
                        </button>
                        <button style={{ ...styles.btnDetail, ...styles.btnHireDetail }}>Hire</button>
                    </div>

                    {/* Project Info Section */}
                    <div style={{ ...styles.projectInfoSection, ...styles.card }}>
                        <h3 style={styles.projectTitleDetail}>{project.title}</h3>
                        <p style={styles.projectStats}>
                            <i className="fas fa-thumbs-up"></i> {project.stats.likes}
                            &bull; <i className="fas fa-eye"></i> {project.stats.views}
                            &bull; <i className="fas fa-comment"></i> {project.stats.comments}
                        </p>
                        <p style={styles.publishedDate}>Published: {project.date}</p>
                    </div>
                </div>

                {/* Tools/Tags Section */}
                <div style={{ ...styles.toolsSection, ...styles.card }}>
                    <h4 style={styles.sectionTitle}>TOOLS</h4>
                    <p style={styles.toolsList}>{project.tools.join(', ')}</p>

                    <h4 style={styles.sectionTitle}>CREATIVE FIELDS</h4>
                    {project.creativeFields.map((field, index) => (
                        <div key={index} style={styles.creativeFieldTag}>{field}</div>
                    ))}

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '40px' }}>
                        {project.tags.map((tag, index) => (
                            <span key={index} style={styles.tag}>{tag}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};


const Footer = () => (
    <footer style={styles.footer}>
        <div style={styles.footerTop}>
            <div><div style={{ color: '#0055ff', fontSize: '24px', fontWeight: 'bold' }}>Bēhance</div></div>
            {[
                { title: "Built For Creatives", links: ["Try Behance Pro", "Find Inspiration", "Get Hired"] },
                { title: "Find Talent", links: ["Post a Job", "Graphic Designers", "Photographers"] },
                { title: "Behance", links: ["About", "Adobe Portfolio", "Careers"] },
                { title: "Social", links: ["Instagram", "Twitter", "LinkedIn"] },
            ].map((section, index) => (
                <div key={index}>
                    <h3 style={styles.footerH3}>{section.title}</h3>
                    <ul style={styles.footerUl}>
                        {section.links.map((link, i) => (
                            <li key={i} style={styles.footerLi}><a href="#" style={styles.footerA}>{link}</a></li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
        <div style={styles.footerBottom}>
            <span>© 2025 Adobe Inc. All rights reserved.</span>
            <div>
                <a href="#" style={{ ...styles.footerA, color: '#999' }}>English</a> |
                <a href="#" style={{ ...styles.footerA, color: '#999' }}>TOU</a> |
                <a href="#" style={{ ...styles.footerA, color: '#999' }}>Privacy</a> |
                <a href="#" style={{ ...styles.footerA, color: '#999' }}>Cookie Preferences</a>
            </div>
        </div>
    </footer>
);


const App = () => {

    const projectData = {
        title: "mr Studios | Landing Page",
        date: "July 30th 2025",
        stats: {
            likes: 1,
            views: 43,
            comments: 0
        },
        owner: {
            name: "Hemanth",
            location: "Tamilnadu, India",
            pic: "hem.png" 
        },
        tools: ["Figma", "Adobe Photoshop"],
        creativeFields: ["UI/UX", "Web Design"],
        tags: ["Web Design", "landing page", "Figma", "ui design", "Web", "UI/UX"]
    };

    return (
        <div style={styles.body}>
            {/* The first half of your provided HTML (Navbar, Main Content with Images, Right Sidebar) */}
            <Navbar />
            <ProjectGallery /> {/* Includes the smaller ActionSidebar */}

            {/* The second half of your provided HTML (Header, Author, and Details sections) */}
            <ProjectHeader
                likes={projectData.stats.likes}
                views={projectData.stats.views}
                comments={projectData.stats.comments}
                date={projectData.date}
            />
            <AuthorSection
                authorName={projectData.owner.name}
                authorPic={projectData.owner.pic}
            />
            <DetailsSidebar project={projectData} />

            {/* The third part of your provided HTML (Footer) */}
            <Footer />
        </div>
    );
};

export default App;