const presetBtn = document.getElementById('preset-btn') as HTMLButtonElement;
const presetMenu = document.getElementById('preset-menu') as HTMLDivElement;
const moreBtn = document.getElementById('more-btn') as HTMLButtonElement;
const moreMenu = document.getElementById('more-menu') as HTMLDivElement;
const modelBtn = document.getElementById('model-btn') as HTMLButtonElement;
const modelMenu = document.getElementById('model-menu') as HTMLDivElement;
const saveBtn = document.getElementById('save-btn') as HTMLButtonElement;
const viewCodeBtn = document.getElementById('view-code-btn') as HTMLButtonElement;
const shareBtn = document.getElementById('share-btn') as HTMLButtonElement;
const submitBtn = document.getElementById('submit-btn') as HTMLButtonElement;
const resetBtn = document.getElementById('reset-btn') as HTMLButtonElement;
const playgroundInput = document.getElementById('playground-input') as HTMLTextAreaElement;

// Slider elements
const temperatureSlider = document.getElementById('temperature-slider') as HTMLInputElement;
const temperatureValue = document.getElementById('temperature-value') as HTMLSpanElement;
const maxLengthSlider = document.getElementById('max-length-slider') as HTMLInputElement;
const maxLengthValue = document.getElementById('max-length-value') as HTMLSpanElement;
const topPSlider = document.getElementById('top-p-slider') as HTMLInputElement;
const topPValue = document.getElementById('top-p-value') as HTMLSpanElement;

// Interface for playground settings
interface PlaygroundSettings {
    model: string;
    temperature: number;
    maxLength: number;
    topP: number;
    prompt: string;
}

// Default settings
const defaultSettings: PlaygroundSettings = {
    model: 'text-davinci-003',
    temperature: 0.56,
    maxLength: 256,
    topP: 0.9,
    prompt: ''
};

// Current settings
let currentSettings: PlaygroundSettings = { ...defaultSettings };

// Toggle dropdown function
function toggleDropdown(menu: HTMLElement): void {
    // Close all other dropdowns first
    const allDropdowns = document.querySelectorAll('.dropdown-content');
    allDropdowns.forEach(dropdown => {
        if (dropdown !== menu && dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
        }
    });
    
    // Toggle the current dropdown
    menu.classList.toggle('show');
}

// Close dropdowns when clicking outside
window.addEventListener('click', (event: MouseEvent) => {
    if (!(event.target as HTMLElement).matches('.dropdown-content') && 
        !(event.target as HTMLElement).closest('button')) {
        const dropdowns = document.querySelectorAll('.dropdown-content');
        dropdowns.forEach(dropdown => {
            if (dropdown.classList.contains('show')) {
                dropdown.classList.remove('show');
            }
        });
    }
});

// Preset dropdown toggle
presetBtn.addEventListener('click', () => {
    toggleDropdown(presetMenu);
});

// More options dropdown toggle
moreBtn.addEventListener('click', () => {
    toggleDropdown(moreMenu);
});

// Model dropdown toggle
modelBtn.addEventListener('click', () => {
    toggleDropdown(modelMenu);
});

// Handle preset selection
presetMenu.addEventListener('click', (event) => {
    event.preventDefault();
    const target = event.target as HTMLElement;
    if (target.tagName === 'A') {
        const presetName = target.textContent;
        presetBtn.querySelector('span')!.textContent = presetName;
        presetMenu.classList.remove('show');
        
        // Apply preset settings (this would be expanded in a real implementation)
        switch(presetName) {
            case 'Grammatical Standard English':
                playgroundInput.placeholder = 'Correct this to standard English';
                break;
            case 'Q&A':
                playgroundInput.placeholder = 'Ask a question';
                break;
            case 'Classification':
                playgroundInput.placeholder = 'Classify the following text';
                break;
            case 'English to Other Languages':
                playgroundInput.placeholder = 'Translate this to Spanish';
                break;
            case 'Text to Command':
                playgroundInput.placeholder = 'Convert this text to a command';
                break;
            case 'Chat':
                playgroundInput.placeholder = 'Start a conversation';
                break;
        }
    }
});

// Handle model selection
modelMenu.addEventListener('click', (event) => {
    event.preventDefault();
    const target = event.target as HTMLElement;
    if (target.tagName === 'A') {
        const modelName = target.textContent;
        modelBtn.querySelector('span')!.textContent = modelName;
        modelMenu.classList.remove('show');
        currentSettings.model = modelName || 'text-davinci-003';
    }
});

// Update slider values
temperatureSlider.addEventListener('input', () => {
    const value = parseFloat(temperatureSlider.value);
    temperatureValue.textContent = value.toFixed(2);
    currentSettings.temperature = value;
});

maxLengthSlider.addEventListener('input', () => {
    const value = parseInt(maxLengthSlider.value);
    maxLengthValue.textContent = value.toString();
    currentSettings.maxLength = value;
});

topPSlider.addEventListener('input', () => {
    const value = parseFloat(topPSlider.value);
    topPValue.textContent = value.toFixed(2);
    currentSettings.topP = value;
});

// Handle save button
saveBtn.addEventListener('click', () => {
    alert('Settings saved!');
    // In a real implementation, this would save the current settings
});

// Handle view code button
viewCodeBtn.addEventListener('click', () => {
    alert('Viewing code...');
    // In a real implementation, this would show the code for the current configuration
});

// Handle share button
shareBtn.addEventListener('click', () => {
    alert('Sharing playground...');
    // In a real implementation, this would generate a shareable link
});

// Handle submit button
submitBtn.addEventListener('click', () => {
    const prompt = playgroundInput.value.trim();
    if (!prompt) {
        alert('Please enter a prompt');
        return;
    }
    
    currentSettings.prompt = prompt;
    
    // In a real implementation, this would send the request to an AI API
    alert(`Submitting with settings:
Model: ${currentSettings.model}
Temperature: ${currentSettings.temperature}
Max Length: ${currentSettings.maxLength}
Top P: ${currentSettings.topP}
Prompt: ${currentSettings.prompt}`);
});

// Handle reset button
resetBtn.addEventListener('click', () => {
    playgroundInput.value = '';
    // Reset to default settings
    temperatureSlider.value = defaultSettings.temperature.toString();
    temperatureValue.textContent = defaultSettings.temperature.toFixed(2);
    maxLengthSlider.value = defaultSettings.maxLength.toString();
    maxLengthValue.textContent = defaultSettings.maxLength.toString();
    topPSlider.value = defaultSettings.topP.toString();
    topPValue.textContent = defaultSettings.topP.toFixed(2);
    
    currentSettings = { ...defaultSettings };
});