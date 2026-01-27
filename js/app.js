/* ===========================================
   ASHLEY SEPERS INTERACTIVE PORTFOLIO
   Main Application Logic
   =========================================== */

// =========================================
// STATE MANAGEMENT
// =========================================
const state = {
    currentScreen: 'boot',
    currentDialog: null,
    currentDialogState: null,
    windows: [],
    windowZIndex: 100,
    startMenuOpen: false,
    visitCount: 1337,
    sessionStartTime: Date.now()
};

// =========================================
// INITIALIZATION
// =========================================
document.addEventListener('DOMContentLoaded', () => {
    initBootSequence();
    initOfficeInteractions();
    initDialogSystem();
    initHireMeOS();
    initNavigation();
    updateClock();
    setInterval(updateClock, 1000);

    // Increment visitor count (stored in localStorage for fun)
    const storedCount = localStorage.getItem('ashleyVisitCount');
    if (storedCount) {
        state.visitCount = parseInt(storedCount) + 1;
    }
    localStorage.setItem('ashleyVisitCount', state.visitCount);
});

// =========================================
// BOOT SEQUENCE
// =========================================
function initBootSequence() {
    const bootScreen = document.getElementById('boot-screen');
    const bootPrompt = bootScreen.querySelector('.boot-prompt');
    const bootStatus = bootScreen.querySelector('.boot-status');

    const statusMessages = [
        'Initializing office environment...',
        'Loading bookshelf contents...',
        'Brewing coffee...',
        'Waking The Huckleberries...',
        'Calibrating gap-filling sensors...',
        'Ready!'
    ];

    let statusIndex = 0;
    const statusInterval = setInterval(() => {
        if (statusIndex < statusMessages.length) {
            bootStatus.textContent = statusMessages[statusIndex];
            statusIndex++;
        } else {
            clearInterval(statusInterval);
            bootPrompt.style.display = 'block';
        }
    }, 600);

    // Skip boot on any key press or click
    const skipBoot = () => {
        clearInterval(statusInterval);
        showScreen('office');
        document.removeEventListener('keydown', skipBoot);
        document.removeEventListener('click', skipBoot);
    };

    // Wait for boot to complete before allowing skip
    setTimeout(() => {
        document.addEventListener('keydown', skipBoot);
        document.addEventListener('click', skipBoot);
    }, 2000);

    // Auto-advance after boot completes
    setTimeout(() => {
        if (state.currentScreen === 'boot') {
            showScreen('office');
        }
    }, 5000);
}

// =========================================
// SCREEN MANAGEMENT
// =========================================
function showScreen(screenName) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });

    const targetScreen = document.getElementById(`${screenName}-screen`);
    if (targetScreen) {
        targetScreen.classList.add('active');
        state.currentScreen = screenName;
    }
}

// =========================================
// OFFICE INTERACTIONS
// =========================================
function initOfficeInteractions() {
    // Handle hotspot clicks (furniture items)
    const hotspots = document.querySelectorAll('.hotspot');
    hotspots.forEach(hotspot => {
        hotspot.addEventListener('click', (e) => {
            e.stopPropagation();
            const item = hotspot.dataset.item;

            if (item === 'monitor') {
                showScreen('hiremos');
            } else if (CONVERSATIONS[item]) {
                openDialog(item);
            }
        });
    });

    // Handle cat clicks (The Huckleberries)
    const cats = document.querySelectorAll('.cat-container');
    cats.forEach(cat => {
        cat.addEventListener('click', (e) => {
            e.stopPropagation();
            const item = cat.dataset.item;

            if (CONVERSATIONS[item]) {
                openDialog(item);
            }
        });
    });

    // Add hover sounds/effects to hotspots
    hotspots.forEach(hotspot => {
        hotspot.addEventListener('mouseenter', () => {
            hotspot.querySelector('.hotspot-label')?.classList.add('visible');
        });
        hotspot.addEventListener('mouseleave', () => {
            hotspot.querySelector('.hotspot-label')?.classList.remove('visible');
        });
    });
}

// =========================================
// DIALOG SYSTEM (Oregon Trail II Style)
// =========================================
function initDialogSystem() {
    const overlay = document.getElementById('dialog-overlay');
    const closeBtn = overlay.querySelector('.dialog-close');

    closeBtn.addEventListener('click', closeDialog);

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeDialog();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && state.currentDialog) {
            closeDialog();
        }
    });
}

function openDialog(conversationKey, stateKey = 'initial') {
    const conversation = CONVERSATIONS[conversationKey];
    if (!conversation) return;

    const dialogState = conversation[stateKey];
    if (!dialogState) return;

    state.currentDialog = conversationKey;
    state.currentDialogState = stateKey;

    const overlay = document.getElementById('dialog-overlay');
    const titleEl = overlay.querySelector('.dialog-title');
    const messageEl = document.getElementById('dialog-message');
    const photoEl = document.getElementById('dialog-photo');
    const choicesEl = document.getElementById('dialog-choices');

    // Set title
    titleEl.textContent = conversation.title || 'Conversation';

    // Set message
    messageEl.textContent = dialogState.message;

    // Set photo (use placeholder for now)
    const photoType = dialogState.photo || 'default';
    photoEl.src = `assets/photos/${photoType}.jpg`;
    photoEl.onerror = () => {
        // Fallback to a colored placeholder
        photoEl.style.display = 'none';
    };

    // Set choices
    choicesEl.innerHTML = '';
    if (dialogState.choices) {
        dialogState.choices.forEach(choice => {
            const btn = document.createElement('button');
            btn.className = 'dialog-choice';
            btn.textContent = choice.text;
            btn.addEventListener('click', () => {
                if (choice.action === 'close') {
                    closeDialog();
                } else if (choice.next) {
                    openDialog(conversationKey, choice.next);
                }
            });
            choicesEl.appendChild(btn);
        });
    }

    overlay.classList.add('active');
}

function closeDialog() {
    const overlay = document.getElementById('dialog-overlay');
    overlay.classList.remove('active');
    state.currentDialog = null;
    state.currentDialogState = null;
}

// =========================================
// NAVIGATION
// =========================================
function initNavigation() {
    const navBtns = document.querySelectorAll('.nav-btn');

    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const action = btn.dataset.action;

            switch (action) {
                case 'resume':
                    showScreen('hiremos');
                    setTimeout(() => openWindow('resume'), 300);
                    break;
                case 'about':
                    showScreen('hiremos');
                    setTimeout(() => openWindow('about'), 300);
                    break;
                case 'contact':
                    openContactDialog();
                    break;
            }
        });
    });
}

function openContactDialog() {
    // Create a temporary contact conversation
    const contactConvo = {
        title: 'Contact Ashley',
        initial: {
            message: "Ready to chat? Here's how to reach me:\n\nEmail: ashley.sepers@gmail.com\nPhone: 647.574.7721\nLinkedIn: linkedin.com/in/ashley-sarahsep\n\nI'm based in Guelph, Ontario and open to remote opportunities. Looking forward to connecting!",
            photo: 'warm',
            choices: [
                { text: "Thanks!", action: 'close' }
            ]
        }
    };

    // Temporarily add to conversations
    CONVERSATIONS._contact = contactConvo;
    openDialog('_contact');
}

// =========================================
// HIREMOS DESKTOP
// =========================================
function initHireMeOS() {
    // Desktop icons
    const icons = document.querySelectorAll('.desktop-icon');
    icons.forEach(icon => {
        icon.addEventListener('dblclick', () => {
            const app = icon.dataset.app;
            openWindow(app);
        });

        icon.addEventListener('click', () => {
            icons.forEach(i => i.classList.remove('selected'));
            icon.classList.add('selected');
        });
    });

    // Start button
    const startBtn = document.getElementById('start-btn');
    const startMenu = document.getElementById('start-menu');

    startBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        state.startMenuOpen = !state.startMenuOpen;
        startBtn.classList.toggle('active', state.startMenuOpen);
        startMenu.classList.toggle('active', state.startMenuOpen);
    });

    // Start menu items
    const startItems = startMenu.querySelectorAll('.start-item');
    startItems.forEach(item => {
        item.addEventListener('click', () => {
            const app = item.dataset.app;
            const action = item.dataset.action;

            if (action === 'exit') {
                showScreen('office');
            } else if (app) {
                openWindow(app);
            }

            closeStartMenu();
        });
    });

    // Close start menu on outside click
    document.addEventListener('click', (e) => {
        if (state.startMenuOpen && !startMenu.contains(e.target) && e.target !== startBtn) {
            closeStartMenu();
        }
    });
}

function closeStartMenu() {
    state.startMenuOpen = false;
    document.getElementById('start-btn').classList.remove('active');
    document.getElementById('start-menu').classList.remove('active');
}

// =========================================
// WINDOW MANAGEMENT
// =========================================
function openWindow(appName) {
    // Check if window already exists
    const existingWindow = state.windows.find(w => w.app === appName);
    if (existingWindow) {
        focusWindow(existingWindow.id);
        return;
    }

    const template = document.getElementById('window-template');
    const windowEl = template.content.cloneNode(true).querySelector('.os-window');

    const windowId = `window-${Date.now()}`;
    windowEl.id = windowId;

    // Set window properties based on app
    const titles = {
        resume: 'Resume.doc - WordPad',
        chat: 'AshleyChat',
        work: 'Work Examples',
        about: 'AboutMe.html - Internet Explorer',
        recycle: 'Recycle Bin'
    };

    windowEl.querySelector('.window-title').textContent = titles[appName] || appName;

    // Load content
    const contentEl = windowEl.querySelector('.window-content');
    loadWindowContent(appName, contentEl);

    // Position window
    const offset = state.windows.length * 30;
    windowEl.style.left = `${100 + offset}px`;
    windowEl.style.top = `${50 + offset}px`;
    windowEl.style.width = '600px';
    windowEl.style.height = '450px';
    windowEl.style.zIndex = ++state.windowZIndex;

    // Window controls
    const closeBtn = windowEl.querySelector('.win-btn.close');
    const maxBtn = windowEl.querySelector('.win-btn.maximize');
    const minBtn = windowEl.querySelector('.win-btn.minimize');

    closeBtn.addEventListener('click', () => closeWindow(windowId));
    maxBtn.addEventListener('click', () => toggleMaximize(windowEl));
    minBtn.addEventListener('click', () => minimizeWindow(windowId));

    // Make draggable
    makeDraggable(windowEl);

    // Focus on click
    windowEl.addEventListener('mousedown', () => focusWindow(windowId));

    // Add to DOM and state
    document.getElementById('windows-container').appendChild(windowEl);
    state.windows.push({ id: windowId, app: appName, element: windowEl });

    // Add taskbar item
    addTaskbarItem(windowId, titles[appName] || appName);

    focusWindow(windowId);
}

function loadWindowContent(appName, container) {
    const templateId = `${appName}-content`;
    const template = document.getElementById(templateId);

    if (template) {
        container.innerHTML = '';
        container.appendChild(template.content.cloneNode(true));

        // Initialize app-specific functionality
        if (appName === 'work') {
            initWorkExplorer(container);
        } else if (appName === 'chat') {
            initChatWindow(container);
        } else if (appName === 'about') {
            // Update visitor count
            const countEl = container.querySelector('#visitor-count');
            if (countEl) {
                countEl.textContent = String(state.visitCount).padStart(6, '0');
            }
        }
    }
}

function closeWindow(windowId) {
    const windowIndex = state.windows.findIndex(w => w.id === windowId);
    if (windowIndex > -1) {
        const windowData = state.windows[windowIndex];
        windowData.element.remove();
        state.windows.splice(windowIndex, 1);
        removeTaskbarItem(windowId);
    }
}

function focusWindow(windowId) {
    const windowData = state.windows.find(w => w.id === windowId);
    if (windowData) {
        windowData.element.style.zIndex = ++state.windowZIndex;

        // Update taskbar
        document.querySelectorAll('.taskbar-item').forEach(item => {
            item.classList.toggle('active', item.dataset.windowId === windowId);
        });
    }
}

function toggleMaximize(windowEl) {
    windowEl.classList.toggle('maximized');
}

function minimizeWindow(windowId) {
    const windowData = state.windows.find(w => w.id === windowId);
    if (windowData) {
        windowData.element.style.display = 'none';
    }
}

function restoreWindow(windowId) {
    const windowData = state.windows.find(w => w.id === windowId);
    if (windowData) {
        windowData.element.style.display = 'flex';
        focusWindow(windowId);
    }
}

// =========================================
// TASKBAR
// =========================================
function addTaskbarItem(windowId, title) {
    const taskbarItems = document.getElementById('taskbar-items');
    const item = document.createElement('div');
    item.className = 'taskbar-item active';
    item.dataset.windowId = windowId;
    item.textContent = title;

    item.addEventListener('click', () => {
        const windowData = state.windows.find(w => w.id === windowId);
        if (windowData) {
            if (windowData.element.style.display === 'none') {
                restoreWindow(windowId);
            } else {
                focusWindow(windowId);
            }
        }
    });

    taskbarItems.appendChild(item);
}

function removeTaskbarItem(windowId) {
    const item = document.querySelector(`.taskbar-item[data-window-id="${windowId}"]`);
    if (item) {
        item.remove();
    }
}

// =========================================
// DRAGGABLE WINDOWS
// =========================================
function makeDraggable(windowEl) {
    const titlebar = windowEl.querySelector('.window-titlebar');
    let isDragging = false;
    let startX, startY, startLeft, startTop;

    titlebar.addEventListener('mousedown', (e) => {
        if (e.target.classList.contains('win-btn')) return;

        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        startLeft = windowEl.offsetLeft;
        startTop = windowEl.offsetTop;

        document.addEventListener('mousemove', onDrag);
        document.addEventListener('mouseup', stopDrag);
    });

    function onDrag(e) {
        if (!isDragging) return;

        const dx = e.clientX - startX;
        const dy = e.clientY - startY;

        windowEl.style.left = `${startLeft + dx}px`;
        windowEl.style.top = `${startTop + dy}px`;
    }

    function stopDrag() {
        isDragging = false;
        document.removeEventListener('mousemove', onDrag);
        document.removeEventListener('mouseup', stopDrag);
    }
}

// =========================================
// WORK EXAMPLES (File Explorer)
// =========================================
function initWorkExplorer(container) {
    const folders = container.querySelectorAll('.folder-item');
    const caseStudyView = container.querySelector('#case-study-view');
    const caseStudyContent = container.querySelector('#case-study-content');
    const explorerContent = container.querySelector('.explorer-content');
    const backBtn = container.querySelector('.back-to-folders');

    folders.forEach(folder => {
        folder.addEventListener('dblclick', () => {
            const folderId = folder.dataset.folder;
            const caseStudy = CASE_STUDIES[folderId];

            if (caseStudy) {
                caseStudyContent.innerHTML = caseStudy.content;
                explorerContent.style.display = 'none';
                caseStudyView.style.display = 'block';
            }
        });
    });

    backBtn.addEventListener('click', () => {
        explorerContent.style.display = 'flex';
        caseStudyView.style.display = 'none';
    });
}

// =========================================
// CHAT WINDOW (AshleyChat.exe)
// =========================================
function initChatWindow(container) {
    const messagesEl = container.querySelector('#chat-messages');
    const quickReplies = container.querySelectorAll('.quick-reply');

    quickReplies.forEach(btn => {
        btn.addEventListener('click', () => {
            const topic = btn.dataset.topic;
            handleChatTopic(topic, messagesEl, container);
        });
    });
}

function handleChatTopic(topic, messagesEl, container) {
    const response = CHAT_RESPONSES[topic];
    if (!response) return;

    // Add user message
    addChatMessage(messagesEl, topic.charAt(0).toUpperCase() + topic.slice(1).replace(/_/g, ' '), 'outgoing');

    // Add typing indicator then responses
    setTimeout(() => {
        response.messages.forEach((msg, index) => {
            setTimeout(() => {
                addChatMessage(messagesEl, msg, 'incoming');
            }, index * 800);
        });

        // Update quick replies
        setTimeout(() => {
            updateQuickReplies(container, response.followUp);
        }, response.messages.length * 800 + 200);
    }, 500);
}

function addChatMessage(container, text, type) {
    const msg = document.createElement('div');
    msg.className = `message ${type}`;

    const textEl = document.createElement('span');
    textEl.className = 'message-text';
    textEl.textContent = text;

    const timeEl = document.createElement('span');
    timeEl.className = 'message-time';
    timeEl.textContent = 'Just now';

    msg.appendChild(textEl);
    msg.appendChild(timeEl);
    container.appendChild(msg);

    // Scroll to bottom
    container.scrollTop = container.scrollHeight;
}

function updateQuickReplies(container, followUp) {
    const quickRepliesEl = container.querySelector('#chat-quick-replies');

    if (followUp && followUp.length > 0) {
        quickRepliesEl.innerHTML = '';
        followUp.forEach(item => {
            const btn = document.createElement('button');
            btn.className = 'quick-reply';
            btn.textContent = item.text;
            btn.dataset.topic = item.topic;
            btn.addEventListener('click', () => {
                const messagesEl = container.querySelector('#chat-messages');
                handleChatTopic(item.topic, messagesEl, container);
            });
            quickRepliesEl.appendChild(btn);
        });
    } else {
        quickRepliesEl.innerHTML = '<span style="color: #888; font-size: 13px;">Thanks for chatting! Feel free to explore more of the site.</span>';
    }
}

// =========================================
// UTILITIES
// =========================================
function updateClock() {
    const clock = document.getElementById('tray-clock');
    if (clock) {
        const now = new Date();
        clock.textContent = now.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });
    }
}
