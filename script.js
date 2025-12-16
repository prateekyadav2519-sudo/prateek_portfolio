// DOM Elements
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const typewriterElement = document.getElementById('typewriter');
const messageForm = document.getElementById('messageForm');
const currentYearElement = document.getElementById('currentYear');
const certificateModal = document.getElementById('certificateModal');
const closeModal = document.querySelector('.close-modal');
const viewCertificateButtons = document.querySelectorAll('.view-certificate');
const modalTitle = document.getElementById('modalTitle');
const detailTitle = document.getElementById('detailTitle');
const detailDescription = document.getElementById('detailDescription');
const detailIssuer = document.getElementById('detailIssuer');
const detailDate = document.getElementById('detailDate');
const detailDuration = document.getElementById('detailDuration');
const detailLink = document.getElementById('detailLink');
const certificatePreview = document.getElementById('certificatePreview');

// Typewriter Effect
const roles = [
    "Graphic Designer",
    "Frontend Developer",
    "Freelancer",
    "AI/ML Enthusiast",
    "Continuous Learner"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let isEnd = false;

function typeWriter() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        typewriterElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typewriterElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }
    
    if (!isDeleting && charIndex === currentRole.length) {
        isEnd = true;
        isDeleting = true;
        setTimeout(typeWriter, 1500); // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex++;
        if (roleIndex === roles.length) roleIndex = 0;
        setTimeout(typeWriter, 500); // Pause before next role
    } else {
        const typeSpeed = isDeleting ? 50 : 100;
        setTimeout(typeWriter, typeSpeed);
    }
}

// Mobile Menu Toggle
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.innerHTML = navLinks.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Form Submission
messageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
    messageForm.reset();
});
// Certificate Data
const certificatesData = {
    'ai': {
        title: 'Basics of Artificial Intelligence: Learning Models',
        code: 'CR1273',
        cen: '251623014.CR1273',
        level: 'Level 7',
        modules: [
            { code: 'IT019400001055', name: 'Alt Learnings Models', marks: '88/100', status: 'Pass' },
            { code: '', name: 'Foundations of AI Learning', marks: '36/40', status: '' },
            { code: '', name: 'Exploring AI Learning Frameworks and Depth', marks: '52/60', status: '' }
        ],
        total: '88/100',
        blockchainID: '2621-6969-9494',
        issued: '21 August 2025'
    },
    'data-viz': {
        title: 'Basics of Data Visualization Using Python',
        code: 'CR966',
        cen: '251623014.CR966',
        level: 'Level 7',
        modules: [
            { code: 'IT014300000779', name: 'Data Visualization Using Python', marks: '92/100', status: 'Pass' },
            { code: '', name: 'Introduction to Data Visualization Python Tools', marks: '60/60', status: '' },
            { code: '', name: 'Plotting & Visualizing Data using Geoplotlib & Bokeh', marks: '32/40', status: '' }
        ],
        total: '92/100',
        blockchainID: '5284-9005-2828',
        issued: '21 August 2025'
    }
};

// Official Certificate Templates
const certificateTemplates = {
    'ai-cert': {
        type: 'cambridge',
        title: 'Basics of Artificial Intelligence: Learning Models',
        subtitle: 'Cambridge International Qualifications',
        issuedDate: '21, August 2025',
        blockchainID: '2621-40939-9414',
        partner: 'UniAthena',
        officer: 'Huw Flynn Hughes',
        downloadUrl: '#' // Add actual PDF URL
    },
    'python-cert': {
        type: 'cambridge',
        title: 'Basics of Data Visualization Using Python',
        subtitle: 'Cambridge International Qualifications',

class SnakeGame {
    constructor() {
        this.canvas = document.getElementById('snakeCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.gridSize = 20;
        this.tileCount = this.canvas.width / this.gridSize;
        
        // Game state
        this.snake = [{x: 10, y: 10}];
        this.food = {};
        this.dx = 0;
        this.dy = 0;
        this.score = 0;
        this.highScore = localStorage.getItem('snakeHighScore') || 0;
        this.gameRunning = false;
        this.gameLoop = null;
        this.speed = 150; // ms
        
        // DOM elements
        this.scoreElement = document.getElementById('score');
        this.highScoreElement = document.getElementById('highScore');
        this.startBtn = document.getElementById('startBtn');
        this.pauseBtn = document.getElementById('pauseBtn');
        this.resetBtn = document.getElementById('resetBtn');
        this.overlayStartBtn = document.getElementById('overlayStartBtn');
        this.gameOverlay = document.getElementById('gameOverlay');
        
        this.init();
    }
    
    init() {
        // Set high score
        this.highScoreElement.textContent = this.highScore;
        
        // Generate first food
        this.generateFood();
        
        // Draw initial state
        this.draw();
        
        // Event listeners
        document.addEventListener('keydown', this.changeDirection.bind(this));
        this.startBtn.addEventListener('click', () => this.startGame());
        this.pauseBtn.addEventListener('click', () => this.pauseGame());
        this.resetBtn.addEventListener('click', () => this.resetGame());
        this.overlayStartBtn.addEventListener('click', () => {
            this.gameOverlay.style.display = 'none';
            this.startGame();
        });
        
        // Draw initial food
        this.drawFood();
    }
    
    startGame() {
        if (this.gameRunning) return;
        
        this.gameRunning = true;
        this.gameOverlay.style.display = 'none';
        
        // Reset snake position and direction
        this.snake = [{x: 10, y: 10}];
        this.dx = this.gridSize;
        this.dy = 0;
        this.score = 0;
        this.scoreElement.textContent = this.score;
        
        this.generateFood();
        this.gameLoop = setInterval(() => this.update(), this.speed);
    }
    
    pauseGame() {
        if (!this.gameRunning) return;
        
        if (this.gameLoop) {
            clearInterval(this.gameLoop);
            this.gameLoop = null;
            this.gameOverlay.style.display = 'flex';
            this.gameOverlay.innerHTML = `
                <h3>Game Paused</h3>
                <p>Score: ${this.score}</p>
                <button id="resumeBtn" class="game-btn">
                    <i class="fas fa-play"></i> Resume
                </button>
            `;
            
            document.getElementById('resumeBtn').addEventListener('click', () => {
                this.gameOverlay.style.display = 'none';
                this.gameLoop = setInterval(() => this.update(), this.speed);
            });
        } else {
            this.gameOverlay.style.display = 'none';
            this.gameLoop = setInterval(() => this.update(), this.speed);
        }
    }
    
    resetGame() {
        clearInterval(this.gameLoop);
        this.gameRunning = false;
        this.snake = [{x: 10, y: 10}];
        this.dx = 0;
        this.dy = 0;
        this.score = 0;
        this.scoreElement.textContent = this.score;
        this.generateFood();
        this.draw();
        this.gameOverlay.style.display = 'flex';
        this.gameOverlay.innerHTML = `
            <h3>Snake Game</h3>
            <p>Press Start Game to begin!</p>
            <button id="overlayStartBtn" class="game-btn">
                <i class="fas fa-play"></i> Start Game
            </button>
        `;
        document.getElementById('overlayStartBtn').addEventListener('click', () => {
            this.gameOverlay.style.display = 'none';
            this.startGame();
        });
    }
    
    changeDirection(event) {
        if (!this.gameRunning) return;
        
        const LEFT_KEY = 37;
        const RIGHT_KEY = 39;
        const UP_KEY = 38;
        const DOWN_KEY = 40;
        
        const keyPressed = event.keyCode;
        const goingUp = this.dy === -this.gridSize;
        const goingDown = this.dy === this.gridSize;
        const goingRight = this.dx === this.gridSize;
        const goingLeft = this.dx === -this.gridSize;
        
        if (keyPressed === LEFT_KEY && !goingRight) {
            this.dx = -this.gridSize;
            this.dy = 0;
        }
        
        if (keyPressed === UP_KEY && !goingDown) {
            this.dx = 0;
            this.dy = -this.gridSize;
        }
        
        if (keyPressed === RIGHT_KEY && !goingLeft) {
            this.dx = this.gridSize;
            this.dy = 0;
        }
        
        if (keyPressed === DOWN_KEY && !goingUp) {
            this.dx = 0;
            this.dy = this.gridSize;
        }
    }
    
    generateFood() {
        this.food = {
            x: Math.floor(Math.random() * this.tileCount) * this.gridSize,
            y: Math.floor(Math.random() * this.tileCount) * this.gridSize
        };
        
        // Make sure food doesn't appear on snake
        for (let segment of this.snake) {
            if (segment.x === this.food.x && segment.y === this.food.y) {
                this.generateFood();
                break;
            }
        }
    }
    
    update() {
        if (!this.gameRunning) return;
        
        // Calculate new head position
        const head = {x: this.snake[0].x + this.dx, y: this.snake[0].y + this.dy};
        
        // Check wall collision
        if (head.x < 0 || head.x >= this.canvas.width || head.y < 0 || head.y >= this.canvas.height) {
            this.gameOver();
            return;
        }
        
        // Check self collision
        for (let segment of this.snake) {
            if (head.x === segment.x && head.y === segment.y) {
                this.gameOver();
                return;
            }
        }
        
        // Add new head
        this.snake.unshift(head);
        
        // Check food collision
        if (head.x === this.food.x && head.y === this.food.y) {
            this.score += 10;
            this.scoreElement.textContent = this.score;
            
            // Update high score
            if (this.score > this.highScore) {
                this.highScore = this.score;
                this.highScoreElement.textContent = this.highScore;
                localStorage.setItem('snakeHighScore', this.highScore);
            }
            
            this.generateFood();
            
            // Increase speed slightly
            if (this.speed > 50 && this.score % 50 === 0) {
                this.speed -= 10;
                clearInterval(this.gameLoop);
                this.gameLoop = setInterval(() => this.update(), this.speed);
            }
        } else {
            // Remove tail if no food eaten
            this.snake.pop();
        }
        
        // Draw updated game state
        this.draw();
    }
    
    draw() {
        // Clear canvas
        this.ctx.fillStyle = '#0a0a14';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw grid
        this.ctx.strokeStyle = 'rgba(230, 57, 70, 0.1)';
        this.ctx.lineWidth = 1;
        
        for (let i = 0; i <= this.canvas.width; i += this.gridSize) {
            this.ctx.beginPath();
            this.ctx.moveTo(i, 0);
            this.ctx.lineTo(i, this.canvas.height);
            this.ctx.stroke();
            
            this.ctx.beginPath();
            this.ctx.moveTo(0, i);
            this.ctx.lineTo(this.canvas.width, i);
            this.ctx.stroke();
        }
        
        // Draw snake
        this.snake.forEach((segment, index) => {
            // Head is different color
            if (index === 0) {
                this.ctx.fillStyle = '#e63946';
                this.ctx.fillRect(segment.x, segment.y, this.gridSize, this.gridSize);
                
                // Draw eyes on head
                this.ctx.fillStyle = 'white';
                const eyeSize = 4;
                const offset = 5;
                
                // Left eye
                this.ctx.beginPath();
                this.ctx.arc(
                    segment.x + offset, 
                    segment.y + offset, 
                    eyeSize, 0, Math.PI * 2
                );
                this.ctx.fill();
                
                // Right eye
                this.ctx.beginPath();
                this.ctx.arc(
                    segment.x + this.gridSize - offset, 
                    segment.y + offset, 
                    eyeSize, 0, Math.PI * 2
                );
                this.ctx.fill();
            } else {
                // Body segments with gradient
                const gradient = this.ctx.createLinearGradient(
                    segment.x, segment.y,
                    segment.x + this.gridSize, segment.y + this.gridSize
                );
                gradient.addColorStop(0, '#4cc9f0');
                gradient.addColorStop(1, '#4361ee');
                
                this.ctx.fillStyle = gradient;
                this.ctx.fillRect(segment.x, segment.y, this.gridSize, this.gridSize);
                
                // Inner highlight
                this.ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
                this.ctx.fillRect(segment.x + 2, segment.y + 2, this.gridSize - 4, this.gridSize - 4);
            }
            
            // Outline
            this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
            this.ctx.lineWidth = 1;
            this.ctx.strokeRect(segment.x, segment.y, this.gridSize, this.gridSize);
        });
        
        // Draw food
        this.drawFood();
    }
    
    drawFood() {
        // Create gradient for food
        const gradient = this.ctx.createRadialGradient(
            this.food.x + this.gridSize/2, this.food.y + this.gridSize/2, 0,
            this.food.x + this.gridSize/2, this.food.y + this.gridSize/2, this.gridSize/2
        );
        gradient.addColorStop(0, '#ff9e00');
        gradient.addColorStop(1, '#ff6d00');
        
        this.ctx.fillStyle = gradient;
        this.ctx.beginPath();
        this.ctx.arc(
            this.food.x + this.gridSize/2,
            this.food.y + this.gridSize/2,
            this.gridSize/2 - 2,
            0, Math.PI * 2
        );
        this.ctx.fill();
        
        // Add shine effect
        this.ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
        this.ctx.beginPath();
        this.ctx.arc(
            this.food.x + this.gridSize/2 - 3,
            this.food.y + this.gridSize/2 - 3,
            3, 0, Math.PI * 2
        );
        this.ctx.fill();
    }
    
    gameOver() {
        clearInterval(this.gameLoop);
        this.gameRunning = false;
        
        this.gameOverlay.style.display = 'flex';
        this.gameOverlay.innerHTML = `
            <h3>Game Over!</h3>
            <p>Final Score: ${this.score}</p>
            <p>High Score: ${this.highScore}</p>
            <button id="restartBtn" class="game-btn">
                <i class="fas fa-redo"></i> Play Again
            </button>
        `;
        
        document.getElementById('restartBtn').addEventListener('click', () => {
            this.resetGame();
            setTimeout(() => this.startGame(), 300);
        });
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Create code particles
    createCodeParticles();
    
    // Initialize snake game
    const snakeGame = new SnakeGame();
    
    // Make snakeGame accessible globally for debugging
    window.snakeGame = snakeGame;
});

// Set current year in footer
currentYearElement.textContent = new Date().getFullYear();

// Add scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.certificate-card, .project-card').forEach(el => {
    observer.observe(el);
});

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    .certificate-card, .project-card {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .certificate-card.animate-in, .project-card.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .certificate-card:nth-child(1) { transition-delay: 0.1s; }
    .certificate-card:nth-child(2) { transition-delay: 0.2s; }
    .certificate-card:nth-child(3) { transition-delay: 0.3s; }
    .project-card:nth-child(1) { transition-delay: 0.1s; }
    .project-card:nth-child(2) { transition-delay: 0.2s; }
    .project-card:nth-child(3) { transition-delay: 0.3s; }
`;
document.head.appendChild(style);
// Code Particles Background
function createCodeParticles() {
    const particlesContainer = document.getElementById('codeParticles');
    const particleCount = 30;
    const codeSnippets = ['<div>', '{ }', 'const', 'function()', 'import', 'export', 'return', 'class', 'async', 'await', '=>', '=>', '()', '[]', '${ }', 'let', 'var', 'if', 'else', 'for', 'while', 'try', 'catch', 'console.log', 'document', 'window', 'addEventListener', 'querySelector', 'getElementById', 'style', 'innerHTML', 'appendChild', 'removeChild', 'createElement', 'classList', 'add', 'remove', 'toggle', 'setAttribute', 'getAttribute', 'JSON', 'parse', 'stringify', 'fetch', 'then', 'catch', 'Promise', 'Math', 'random', 'floor', 'ceil', 'round', 'Date', 'new', 'this', 'super', 'extends', 'implements', 'interface', 'type', 'enum'];
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'code-particle';
        particle.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        
        // Random position
        const left = Math.random() * 100;
        const delay = Math.random() * 15;
        const duration = 10 + Math.random() * 20;
        const fontSize = 12 + Math.random() * 10;
        
        particle.style.left = `${left}%`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.fontSize = `${fontSize}px`;
        particle.style.opacity = 0.2 + Math.random() * 0.5;
        
        particlesContainer.appendChild(particle);
        
        // Remove and recreate particle after animation completes
        setTimeout(() => {
            if (particle.parentNode) {
                particle.remove();
                createNewParticle();
            }
        }, (delay + duration) * 1000);
    }
    
    function createNewParticle() {
        const particle = document.createElement('div');
        particle.className = 'code-particle';
        particle.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        
        const left = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = 10 + Math.random() * 20;
        const fontSize = 12 + Math.random() * 10;
        
        particle.style.left = `${left}%`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.fontSize = `${fontSize}px`;
        particle.style.opacity = 0.2 + Math.random() * 0.5;
        
        particlesContainer.appendChild(particle);
        
        setTimeout(() => {
            if (particle.parentNode) {
                particle.remove();
                createNewParticle();
            }
        }, (delay + duration) * 1000);
    }
}

