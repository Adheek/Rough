/**
 * ========================================
 * DYNAMIC FORMS LIBRARY - MODULAR VERSION
 * ========================================
 *
 * Easy to extend - Just add new field types to the FIELD_REGISTRY below
 * Each field type is self-contained with its own configuration
 */

// ========================================
// CAMERA UTILITIES
// ========================================

window.CameraScanner = {
  streams: {},
  openCamera: function(fieldId) {
    navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
      .then(stream => {
        this.streams[fieldId] = stream;
        document.getElementById(fieldId + '_video').srcObject = stream;
        document.getElementById(fieldId + '_camera').style.display = 'block';
      })
      .catch(err => alert('Camera access denied: ' + err.message));
  },
  captureImage: function(fieldId) {
    const video = document.getElementById(fieldId + '_video');
    const canvas = document.getElementById(fieldId + '_canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0);
    const imageData = canvas.toDataURL('image/png');
    document.getElementById(fieldId).value = imageData;
    document.getElementById(fieldId + '_preview').innerHTML = '<img src="' + imageData + '" style="max-width:200px;border:1px solid #ccc;border-radius:4px"><br><small>Image captured</small>';
    this.closeCamera(fieldId);
  },
  closeCamera: function(fieldId) {
    if (this.streams[fieldId]) {
      this.streams[fieldId].getTracks().forEach(track => track.stop());
      this.streams[fieldId] = null;
    }
    document.getElementById(fieldId + '_camera').style.display = 'none';
  }
};

// ========================================
// FIELD REGISTRY - ADD NEW FIELDS HERE
// ========================================

const FIELD_REGISTRY = {

  // TEXT INPUT FIELD
  text: {
    label: 'Text Input',
    icon: '📝',
    category: 'input',

    // Default data for this field type
    getDefaultData: (id) => ({
      id: id,
      type: 'text',
      label: 'Text Field',
      name: id,
      required: false,
      placeholder: 'Enter text',
      description: ''
    }),

    // Render preview in builder
    renderPreview: (fieldData) => {
      return `
        <label>${fieldData.label}${fieldData.required ? ' *' : ''}</label>
        <input type="text" placeholder="${fieldData.placeholder || ''}" disabled>
        ${fieldData.description ? `<small class="df-field-description">${fieldData.description}</small>` : ''}
      `;
    },

    // Render in actual form
    renderField: (fieldData) => {
      return `
        <label for="${fieldData.id}">${fieldData.label}${fieldData.required ? ' *' : ''}</label>
        <input type="text"
               id="${fieldData.id}"
               name="${fieldData.name}"
               placeholder="${fieldData.placeholder || ''}"
               ${fieldData.required ? 'required' : ''}>
        ${fieldData.description ? `<small class="df-field-description">${fieldData.description}</small>` : ''}
      `;
    },

    // Editable properties
    editableProps: ['label', 'name', 'placeholder', 'description', 'required']
  },

  // EMAIL INPUT FIELD
  email: {
    label: 'Email',
    icon: '📧',
    category: 'input',

    getDefaultData: (id) => ({
      id: id,
      type: 'email',
      label: 'Email Address',
      name: id,
      required: false,
      placeholder: 'you@example.com',
      description: ''
    }),

    renderPreview: (fieldData) => {
      return `
        <label>${fieldData.label}${fieldData.required ? ' *' : ''}</label>
        <input type="email" placeholder="${fieldData.placeholder || ''}" disabled>
        ${fieldData.description ? `<small class="df-field-description">${fieldData.description}</small>` : ''}
      `;
    },

    renderField: (fieldData) => {
      return `
        <label for="${fieldData.id}">${fieldData.label}${fieldData.required ? ' *' : ''}</label>
        <input type="email"
               id="${fieldData.id}"
               name="${fieldData.name}"
               placeholder="${fieldData.placeholder || ''}"
               ${fieldData.required ? 'required' : ''}>
        ${fieldData.description ? `<small class="df-field-description">${fieldData.description}</small>` : ''}
      `;
    },

    editableProps: ['label', 'name', 'placeholder', 'description', 'required']
  },

  // NUMBER INPUT FIELD
  number: {
    label: 'Number',
    icon: '🔢',
    category: 'input',

    getDefaultData: (id) => ({
      id: id,
      type: 'number',
      label: 'Number Field',
      name: id,
      required: false,
      placeholder: '0',
      description: ''
    }),

    renderPreview: (fieldData) => {
      return `
        <label>${fieldData.label}${fieldData.required ? ' *' : ''}</label>
        <input type="number" placeholder="${fieldData.placeholder || ''}" disabled>
        ${fieldData.description ? `<small class="df-field-description">${fieldData.description}</small>` : ''}
      `;
    },

    renderField: (fieldData) => {
      return `
        <label for="${fieldData.id}">${fieldData.label}${fieldData.required ? ' *' : ''}</label>
        <input type="number"
               id="${fieldData.id}"
               name="${fieldData.name}"
               placeholder="${fieldData.placeholder || ''}"
               ${fieldData.required ? 'required' : ''}>
        ${fieldData.description ? `<small class="df-field-description">${fieldData.description}</small>` : ''}
      `;
    },

    editableProps: ['label', 'name', 'placeholder', 'description', 'required']
  },

  // TEXTAREA FIELD
  textarea: {
    label: 'Text Area',
    icon: '📄',
    category: 'input',

    getDefaultData: (id) => ({
      id: id,
      type: 'textarea',
      label: 'Message',
      name: id,
      required: false,
      placeholder: 'Enter your message',
      description: ''
    }),

    renderPreview: (fieldData) => {
      return `
        <label>${fieldData.label}${fieldData.required ? ' *' : ''}</label>
        <textarea placeholder="${fieldData.placeholder || ''}" disabled></textarea>
        ${fieldData.description ? `<small class="df-field-description">${fieldData.description}</small>` : ''}
      `;
    },

    renderField: (fieldData) => {
      return `
        <label for="${fieldData.id}">${fieldData.label}${fieldData.required ? ' *' : ''}</label>
        <textarea id="${fieldData.id}"
                  name="${fieldData.name}"
                  placeholder="${fieldData.placeholder || ''}"
                  ${fieldData.required ? 'required' : ''}></textarea>
        ${fieldData.description ? `<small class="df-field-description">${fieldData.description}</small>` : ''}
      `;
    },

    editableProps: ['label', 'name', 'placeholder', 'description', 'required']
  },

  // SELECT DROPDOWN FIELD
  select: {
    label: 'Select Dropdown',
    icon: '📋',
    category: 'choice',

    getDefaultData: (id) => ({
      id: id,
      type: 'select',
      label: 'Select Option',
      name: id,
      required: false,
      placeholder: '',
      description: '',
      options: ['Option 1', 'Option 2', 'Option 3']
    }),

    renderPreview: (fieldData) => {
      const options = (fieldData.options || []).map(opt => `<option>${opt}</option>`).join('');
      return `
        <label>${fieldData.label}${fieldData.required ? ' *' : ''}</label>
        <select disabled>
          <option>-- Select --</option>
          ${options}
        </select>
        ${fieldData.description ? `<small class="df-field-description">${fieldData.description}</small>` : ''}
      `;
    },

    renderField: (fieldData) => {
      const options = (fieldData.options || []).map(opt => `<option value="${opt}">${opt}</option>`).join('');
      return `
        <label for="${fieldData.id}">${fieldData.label}${fieldData.required ? ' *' : ''}</label>
        <select id="${fieldData.id}"
                name="${fieldData.name}"
                ${fieldData.required ? 'required' : ''}>
          <option value="">-- Select --</option>
          ${options}
        </select>
        ${fieldData.description ? `<small class="df-field-description">${fieldData.description}</small>` : ''}
      `;
    },

    editableProps: ['label', 'name', 'description', 'required', 'options']
  },

  // CHECKBOX FIELD
  checkbox: {
    label: 'Checkbox',
    icon: '☑️',
    category: 'choice',

    getDefaultData: (id) => ({
      id: id,
      type: 'checkbox',
      label: 'Checkbox Options',
      name: id,
      required: false,
      placeholder: '',
      description: '',
      options: ['Option 1', 'Option 2', 'Option 3']
    }),

    renderPreview: (fieldData) => {
      const options = (fieldData.options || []).map((opt, idx) => `
        <div class="df-option-item">
          <input type="checkbox" id="${fieldData.id}_preview_${idx}" disabled>
          <label for="${fieldData.id}_preview_${idx}">${opt}</label>
        </div>
      `).join('');
      return `
        <label>${fieldData.label}${fieldData.required ? ' *' : ''}</label>
        <div class="df-option-group">${options}</div>
        ${fieldData.description ? `<small class="df-field-description">${fieldData.description}</small>` : ''}
      `;
    },

    renderField: (fieldData) => {
      const options = (fieldData.options || []).map((opt, idx) => `
        <div class="df-option-item">
          <input type="checkbox"
                 id="${fieldData.id}_${idx}"
                 name="${fieldData.name}"
                 value="${opt}">
          <label for="${fieldData.id}_${idx}">${opt}</label>
        </div>
      `).join('');
      return `
        <label>${fieldData.label}${fieldData.required ? ' *' : ''}</label>
        <div class="df-option-group">${options}</div>
        ${fieldData.description ? `<small class="df-field-description">${fieldData.description}</small>` : ''}
      `;
    },

    editableProps: ['label', 'name', 'description', 'required', 'options']
  },

  // RADIO BUTTON FIELD
  radio: {
    label: 'Radio Group',
    icon: '🔘',
    category: 'choice',

    getDefaultData: (id) => ({
      id: id,
      type: 'radio',
      label: 'Radio Options',
      name: id,
      required: false,
      placeholder: '',
      description: '',
      options: ['Option 1', 'Option 2', 'Option 3']
    }),

    renderPreview: (fieldData) => {
      const options = (fieldData.options || []).map((opt, idx) => `
        <div class="df-option-item">
          <input type="radio" name="${fieldData.id}_preview" id="${fieldData.id}_preview_${idx}" disabled>
          <label for="${fieldData.id}_preview_${idx}">${opt}</label>
        </div>
      `).join('');
      return `
        <label>${fieldData.label}${fieldData.required ? ' *' : ''}</label>
        <div class="df-option-group">${options}</div>
        ${fieldData.description ? `<small class="df-field-description">${fieldData.description}</small>` : ''}
      `;
    },

    renderField: (fieldData) => {
      const options = (fieldData.options || []).map((opt, idx) => `
        <div class="df-option-item">
          <input type="radio"
                 id="${fieldData.id}_${idx}"
                 name="${fieldData.name}"
                 value="${opt}"
                 ${fieldData.required ? 'required' : ''}>
          <label for="${fieldData.id}_${idx}">${opt}</label>
        </div>
      `).join('');
      return `
        <label>${fieldData.label}${fieldData.required ? ' *' : ''}</label>
        <div class="df-option-group">${options}</div>
        ${fieldData.description ? `<small class="df-field-description">${fieldData.description}</small>` : ''}
      `;
    },

    editableProps: ['label', 'name', 'description', 'required', 'options']
  },

  // DATE FIELD
  date: {
    label: 'Date',
    icon: '📅',
    category: 'input',

    getDefaultData: (id) => ({
      id: id,
      type: 'date',
      label: 'Date',
      name: id,
      required: false,
      placeholder: '',
      description: ''
    }),

    renderPreview: (fieldData) => {
      return `
        <label>${fieldData.label}${fieldData.required ? ' *' : ''}</label>
        <input type="date" disabled>
        ${fieldData.description ? `<small class="df-field-description">${fieldData.description}</small>` : ''}
      `;
    },

    renderField: (fieldData) => {
      return `
        <label for="${fieldData.id}">${fieldData.label}${fieldData.required ? ' *' : ''}</label>
        <input type="date"
               id="${fieldData.id}"
               name="${fieldData.name}"
               ${fieldData.required ? 'required' : ''}>
        ${fieldData.description ? `<small class="df-field-description">${fieldData.description}</small>` : ''}
      `;
    },

    editableProps: ['label', 'name', 'description', 'required']
  },

  // FILE UPLOAD FIELD
  file: {
    label: 'File Upload',
    icon: '📎',
    category: 'input',

    getDefaultData: (id) => ({
      id: id,
      type: 'file',
      label: 'Upload File',
      name: id,
      required: false,
      placeholder: '',
      description: ''
    }),

    renderPreview: (fieldData) => {
      return `
        <label>${fieldData.label}${fieldData.required ? ' *' : ''}</label>
        <input type="file" disabled>
        ${fieldData.description ? `<small class="df-field-description">${fieldData.description}</small>` : ''}
      `;
    },

    renderField: (fieldData) => {
      return `
        <label for="${fieldData.id}">${fieldData.label}${fieldData.required ? ' *' : ''}</label>
        <input type="file"
               id="${fieldData.id}"
               name="${fieldData.name}"
               ${fieldData.required ? 'required' : ''}>
        ${fieldData.description ? `<small class="df-field-description">${fieldData.description}</small>` : ''}
      `;
    },

    editableProps: ['label', 'name', 'description', 'required']
  },

  // HEADER FIELD
  header: {
    label: 'Header',
    icon: '📌',
    category: 'display',

    getDefaultData: (id) => ({
      id: id,
      type: 'header',
      label: 'Header Text',
      name: id,
      required: false,
      placeholder: '',
      description: '',
      subtype: 'h2'
    }),

    renderPreview: (fieldData) => {
      const Tag = fieldData.subtype || 'h2';
      return `<${Tag}>${fieldData.label}</${Tag}>`;
    },

    renderField: (fieldData) => {
      const Tag = fieldData.subtype || 'h2';
      return `<${Tag}>${fieldData.label}</${Tag}>`;
    },

    editableProps: ['label']
  },

  // PARAGRAPH FIELD
  paragraph: {
    label: 'Paragraph',
    icon: '¶',
    category: 'display',

    getDefaultData: (id) => ({
      id: id,
      type: 'paragraph',
      label: 'Paragraph text goes here',
      name: id,
      required: false,
      placeholder: '',
      description: ''
    }),

    renderPreview: (fieldData) => {
      return `<p>${fieldData.label}</p>`;
    },

    renderField: (fieldData) => {
      return `<p>${fieldData.label}</p>`;
    },

    editableProps: ['label']
  },

  // SCANNER/CAMERA FIELD
  scanner: {
    label: 'Scanner',
    icon: '📷',
    category: 'input',

    getDefaultData: (id) => ({
      id: id,
      type: 'scanner',
      label: 'Scan/Capture Image',
      name: id,
      required: false,
      placeholder: '',
      description: ''
    }),

    renderPreview: (fieldData) => {
      return `
        <label>${fieldData.label}${fieldData.required ? ' *' : ''}</label>
        <button type="button" class="df-scanner-btn" disabled>📷 Open Camera</button>
        ${fieldData.description ? `<small class="df-field-description">${fieldData.description}</small>` : ''}
      `;
    },

    renderField: (fieldData) => {
      return `
        <label for="${fieldData.id}">${fieldData.label}${fieldData.required ? ' *' : ''}</label>
        <input type="hidden" id="${fieldData.id}" name="${fieldData.name}" ${fieldData.required ? 'required' : ''}>
        <button type="button" class="df-scanner-btn" onclick="CameraScanner.openCamera('${fieldData.id}')">📷 Open Camera</button>
        <div id="${fieldData.id}_camera" style="display:none;margin-top:10px">
          <video id="${fieldData.id}_video" autoplay style="width:100%;max-width:400px;border:1px solid #ccc"></video>
          <div style="margin-top:10px">
            <button type="button" onclick="CameraScanner.captureImage('${fieldData.id}')" style="padding:8px 16px;background:#28a745;color:white;border:none;border-radius:4px;cursor:pointer">📸 Capture</button>
            <button type="button" onclick="CameraScanner.closeCamera('${fieldData.id}')" style="padding:8px 16px;background:#dc3545;color:white;border:none;border-radius:4px;cursor:pointer;margin-left:10px">Close</button>
          </div>
        </div>
        <canvas id="${fieldData.id}_canvas" style="display:none"></canvas>
        <div id="${fieldData.id}_preview" style="margin-top:10px"></div>
        ${fieldData.description ? `<small class="df-field-description">${fieldData.description}</small>` : ''}
      `;
    },

    editableProps: ['label', 'name', 'description', 'required']
  }

  // ===================================================
  // TO ADD NEW FIELD TYPE:
  // Copy one of the above and modify with your field
  // ===================================================
};


// ========================================
// FORM BUILDER CLASS
// ========================================

class DynamicFormBuilder {
  constructor(container, options = {}) {
    this.container = typeof container === 'string' ? document.querySelector(container) : container;
    this.options = {
      controlPosition: options.controlPosition || 'left',
      showActionButtons: options.showActionButtons !== false,
      disabledFields: options.disabledFields || [],
      ...options
    };
    this.formData = [];
    this.fieldCounter = 0;
    this.gridLayout = false; // Default to single column
    this.init();
  }

  init() {
    this.container.innerHTML = '';
    this.container.className = 'df-builder-container';

    const layout = document.createElement('div');
    layout.className = 'df-builder-layout';

    const controlsPanel = this.createControlsPanel();
    const canvas = this.createCanvas();

    if (this.options.controlPosition === 'left') {
      layout.appendChild(controlsPanel);
      layout.appendChild(canvas);
    } else {
      layout.appendChild(canvas);
      layout.appendChild(controlsPanel);
    }

    this.container.appendChild(layout);

    if (this.options.showActionButtons) {
      this.container.appendChild(this.createActionButtons());
    }
  }

  createControlsPanel() {
    const panel = document.createElement('div');
    panel.className = 'df-controls-panel';

    const title = document.createElement('h3');
    title.textContent = 'Form Fields';
    panel.appendChild(title);

    // Loop through FIELD_REGISTRY to create buttons
    for (const [fieldType, fieldConfig] of Object.entries(FIELD_REGISTRY)) {
      if (!this.options.disabledFields.includes(fieldType)) {
        const fieldBtn = this.createFieldButton(fieldType, fieldConfig);
        panel.appendChild(fieldBtn);
      }
    }

    return panel;
  }

  createFieldButton(fieldType, fieldConfig) {
    const btn = document.createElement('div');
    btn.className = 'df-field-button';
    btn.draggable = true;
    btn.dataset.fieldType = fieldType;
    btn.innerHTML = `<span class="df-icon">${fieldConfig.icon}</span><span>${fieldConfig.label}</span>`;

    btn.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('fieldType', fieldType);
      e.dataTransfer.effectAllowed = 'copy';
    });

    btn.addEventListener('click', () => {
      this.addField(fieldType);
    });

    return btn;
  }

  createCanvas() {
    const canvasWrapper = document.createElement('div');
    canvasWrapper.style.position = 'relative';
    canvasWrapper.style.flex = '1';
    canvasWrapper.style.width = '100%';

    // Layout toggle button
    const toggleBtn = document.createElement('button');
    toggleBtn.textContent = '⚙️ Layout: Single Column';
    toggleBtn.className = 'df-btn';
    toggleBtn.style.position = 'absolute';
    toggleBtn.style.top = '10px';
    toggleBtn.style.right = '10px';
    toggleBtn.style.zIndex = '10';
    toggleBtn.style.fontSize = '12px';
    toggleBtn.style.padding = '5px 10px';
    toggleBtn.onclick = () => this.toggleLayout(toggleBtn);
    canvasWrapper.appendChild(toggleBtn);

    const canvas = document.createElement('div');
    canvas.className = 'df-canvas';
    canvas.style.minHeight = '400px';
    canvas.style.width = '100%';
    this.canvas = canvas;
    this.updateCanvasLayout();

    const placeholder = document.createElement('div');
    placeholder.className = 'df-canvas-placeholder';
    placeholder.textContent = 'Drag fields here or click on field buttons to add them';
    canvas.appendChild(placeholder);

    canvas.addEventListener('dragover', (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'copy';
      canvas.classList.add('df-drag-over');
    });

    canvas.addEventListener('dragleave', () => {
      canvas.classList.remove('df-drag-over');
    });

    canvas.addEventListener('drop', (e) => {
      e.preventDefault();
      canvas.classList.remove('df-drag-over');

      const fieldType = e.dataTransfer.getData('fieldType');
      const fieldId = e.dataTransfer.getData('fieldId');

      const isCanvasTarget = e.target === canvas ||
                           e.target.classList.contains('df-canvas-placeholder') ||
                           (!e.target.closest('.df-field-wrapper'));

      if (fieldType) {
        this.addField(fieldType);
      } else if (fieldId && isCanvasTarget) {
        this.moveFieldToEnd(fieldId);
      }
    });

    canvasWrapper.appendChild(canvas);
    return canvasWrapper;
  }

  toggleLayout(btn) {
    this.gridLayout = !this.gridLayout;
    btn.textContent = this.gridLayout ? '⚙️ Layout: 2x2 Grid' : '⚙️ Layout: Single Column';
    this.updateCanvasLayout();
  }

  updateCanvasLayout() {
    const placeholder = this.canvas.querySelector('.df-canvas-placeholder');
    if (this.gridLayout) {
      this.canvas.style.display = 'grid';
      this.canvas.style.gridTemplateColumns = 'repeat(2, 1fr)';
      this.canvas.style.gap = '15px';
      if (placeholder) placeholder.style.gridColumn = '1 / -1';
    } else {
      this.canvas.style.display = 'block';
      this.canvas.style.gridTemplateColumns = '';
      this.canvas.style.gap = '';
      if (placeholder) placeholder.style.gridColumn = '';
    }
  }


  addField(type) {
    const placeholder = this.canvas.querySelector('.df-canvas-placeholder');
    if (placeholder) {
      placeholder.remove();
    }

    const fieldId = `field-${++this.fieldCounter}`;
    const fieldConfig = FIELD_REGISTRY[type];

    if (!fieldConfig) {
      console.error(`Field type "${type}" not found in registry`);
      return;
    }

    const fieldData = fieldConfig.getDefaultData(fieldId);
    this.formData.push(fieldData);

    const fieldElement = this.createFieldElement(fieldData);
    this.canvas.appendChild(fieldElement);
  }

  createFieldElement(fieldData) {
    const wrapper = document.createElement('div');
    wrapper.className = 'df-field-wrapper';
    wrapper.dataset.fieldId = fieldData.id;
    wrapper.draggable = true;

    // Drag and drop event listeners
    this.attachDragEvents(wrapper, fieldData);

    const header = document.createElement('div');
    header.className = 'df-field-header';

    const title = document.createElement('span');
    title.textContent = fieldData.label;
    header.appendChild(title);

    const actions = document.createElement('div');
    actions.className = 'df-field-actions';

    const editBtn = document.createElement('button');
    editBtn.textContent = '✏️';
    editBtn.className = 'df-btn-icon';
    editBtn.onclick = (e) => {
      e.stopPropagation();
      this.editField(fieldData.id);
    };

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '🗑️';
    deleteBtn.className = 'df-btn-icon';
    deleteBtn.onclick = (e) => {
      e.stopPropagation();
      this.deleteField(fieldData.id);
    };

    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);
    header.appendChild(actions);

    wrapper.appendChild(header);

    const preview = this.createFieldPreview(fieldData);
    wrapper.appendChild(preview);

    return wrapper;
  }

  attachDragEvents(wrapper, fieldData) {
    wrapper.addEventListener('dragstart', (e) => {
      wrapper.classList.add('dragging');
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('fieldId', fieldData.id);
    });

    wrapper.addEventListener('dragend', () => {
      wrapper.classList.remove('dragging');
      document.querySelectorAll('.df-field-wrapper').forEach(el => {
        el.classList.remove('drag-over');
      });
    });

    wrapper.addEventListener('dragover', (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';

      const dragging = document.querySelector('.dragging');
      if (dragging && dragging !== wrapper) {
        wrapper.classList.add('drag-over');
      }
    });

    wrapper.addEventListener('dragleave', () => {
      wrapper.classList.remove('drag-over');
    });

    wrapper.addEventListener('drop', (e) => {
      e.preventDefault();
      wrapper.classList.remove('drag-over');

      const draggedFieldId = e.dataTransfer.getData('fieldId');
      const targetFieldId = fieldData.id;

      if (draggedFieldId && draggedFieldId !== targetFieldId) {
        this.reorderFields(draggedFieldId, targetFieldId);
      }
    });
  }

  createFieldPreview(fieldData) {
    const preview = document.createElement('div');
    preview.className = 'df-field-preview';

    const fieldConfig = FIELD_REGISTRY[fieldData.type];
    if (fieldConfig && fieldConfig.renderPreview) {
      preview.innerHTML = fieldConfig.renderPreview(fieldData);
    } else {
      preview.textContent = 'Preview not available';
    }

    return preview;
  }

  editField(fieldId) {
    const fieldData = this.formData.find(f => f.id === fieldId);
    if (!fieldData) return;

    const modal = this.createEditModal(fieldData);
    document.body.appendChild(modal);
  }

  createEditModal(fieldData) {
    const fieldConfig = FIELD_REGISTRY[fieldData.type];
    const overlay = document.createElement('div');
    overlay.className = 'df-modal-overlay';

    const modal = document.createElement('div');
    modal.className = 'df-modal';

    const header = document.createElement('div');
    header.className = 'df-modal-header';
    header.innerHTML = `<h3>Edit Field</h3><button class="df-modal-close">×</button>`;
    modal.appendChild(header);

    const body = document.createElement('div');
    body.className = 'df-modal-body';

    // Add editable fields based on field config
    const editableProps = fieldConfig.editableProps || [];

    editableProps.forEach(prop => {
      if (prop === 'required') {
        // Checkbox for required
        const group = document.createElement('div');
        group.className = 'df-form-group';
        const label = document.createElement('label');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = fieldData.required;
        checkbox.onchange = (e) => { fieldData.required = e.target.checked; };
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(' Required'));
        group.appendChild(label);
        body.appendChild(group);
      } else if (prop === 'options') {
        // Textarea for options
        const group = document.createElement('div');
        group.className = 'df-form-group';
        const label = document.createElement('label');
        label.textContent = 'Options (one per line)';
        const textarea = document.createElement('textarea');
        textarea.value = (fieldData.options || []).join('\n');
        textarea.onchange = (e) => {
          fieldData.options = e.target.value.split('\n').filter(o => o.trim());
        };
        group.appendChild(label);
        group.appendChild(textarea);
        body.appendChild(group);
      } else {
        // Regular text input
        const group = this.createFormGroup(
          prop.charAt(0).toUpperCase() + prop.slice(1),
          'text',
          fieldData[prop],
          (val) => { fieldData[prop] = val; }
        );
        body.appendChild(group);
      }
    });

    modal.appendChild(body);

    const footer = document.createElement('div');
    footer.className = 'df-modal-footer';

    const saveBtn = document.createElement('button');
    saveBtn.textContent = 'Save';
    saveBtn.className = 'df-btn df-btn-primary';
    saveBtn.onclick = () => {
      this.updateFieldDisplay(fieldData.id);
      overlay.remove();
    };

    const cancelBtn = document.createElement('button');
    cancelBtn.textContent = 'Cancel';
    cancelBtn.className = 'df-btn';
    cancelBtn.onclick = () => overlay.remove();

    footer.appendChild(cancelBtn);
    footer.appendChild(saveBtn);
    modal.appendChild(footer);

    overlay.appendChild(modal);

    header.querySelector('.df-modal-close').onclick = () => overlay.remove();
    overlay.onclick = (e) => {
      if (e.target === overlay) overlay.remove();
    };

    return overlay;
  }

  createFormGroup(label, type, value, onChange) {
    const group = document.createElement('div');
    group.className = 'df-form-group';

    const labelEl = document.createElement('label');
    labelEl.textContent = label;

    const input = document.createElement('input');
    input.type = type;
    input.value = value || '';
    input.onchange = (e) => onChange(e.target.value);

    group.appendChild(labelEl);
    group.appendChild(input);

    return group;
  }

  updateFieldDisplay(fieldId) {
    const fieldData = this.formData.find(f => f.id === fieldId);
    const wrapper = this.canvas.querySelector(`[data-field-id="${fieldId}"]`);
    if (!wrapper || !fieldData) return;

    wrapper.querySelector('.df-field-header span').textContent = fieldData.label;
    const preview = this.createFieldPreview(fieldData);
    wrapper.replaceChild(preview, wrapper.querySelector('.df-field-preview'));
  }

  deleteField(fieldId) {
    if (!confirm('Delete this field?')) return;

    this.formData = this.formData.filter(f => f.id !== fieldId);
    const wrapper = this.canvas.querySelector(`[data-field-id="${fieldId}"]`);
    if (wrapper) wrapper.remove();

    if (this.formData.length === 0) {
      const placeholder = document.createElement('div');
      placeholder.className = 'df-canvas-placeholder';
      placeholder.textContent = 'Drag fields here or click on field buttons to add them';
      this.canvas.appendChild(placeholder);
    }
  }

  reorderFields(draggedId, targetId) {
    const draggedIndex = this.formData.findIndex(f => f.id === draggedId);
    const targetIndex = this.formData.findIndex(f => f.id === targetId);

    if (draggedIndex === -1 || targetIndex === -1) return;

    const [draggedItem] = this.formData.splice(draggedIndex, 1);
    this.formData.splice(targetIndex, 0, draggedItem);

    this.refreshCanvas();
  }

  moveFieldToEnd(fieldId) {
    const fieldIndex = this.formData.findIndex(f => f.id === fieldId);
    if (fieldIndex === -1) return;

    const [field] = this.formData.splice(fieldIndex, 1);
    this.formData.push(field);

    this.refreshCanvas();
  }

  refreshCanvas() {
    const fields = this.canvas.querySelectorAll('.df-field-wrapper');
    fields.forEach(field => field.remove());

    this.formData.forEach(fieldData => {
      const fieldElement = this.createFieldElement(fieldData);
      this.canvas.appendChild(fieldElement);
    });
  }

  createActionButtons() {
    const actions = document.createElement('div');
    actions.className = 'df-actions';

    const clearBtn = document.createElement('button');
    clearBtn.textContent = 'Clear All';
    clearBtn.className = 'df-btn';
    clearBtn.onclick = () => this.clearAll();

    actions.appendChild(clearBtn);

    return actions;
  }

  clearAll() {
    if (!confirm('Clear all fields?')) return;

    this.formData = [];
    this.canvas.innerHTML = '';
    const placeholder = document.createElement('div');
    placeholder.className = 'df-canvas-placeholder';
    placeholder.textContent = 'Drag fields here or click on field buttons to add them';
    this.canvas.appendChild(placeholder);
  }

  getData(format = 'json') {
    if (format === 'json') {
      return JSON.stringify(this.formData, null, 2);
    }
    return this.formData;
  }

  setData(data) {
    if (typeof data === 'string') {
      data = JSON.parse(data);
    }

    this.formData = data;
    this.canvas.innerHTML = '';

    if (data.length === 0) {
      const placeholder = document.createElement('div');
      placeholder.className = 'df-canvas-placeholder';
      placeholder.textContent = 'Drag fields here or click on field buttons to add them';
      this.canvas.appendChild(placeholder);
    } else {
      data.forEach(fieldData => {
        const fieldElement = this.createFieldElement(fieldData);
        this.canvas.appendChild(fieldElement);
      });
    }
  }
}


// ========================================
// FORM RENDERER CLASS
// ========================================

class DynamicFormRenderer {
  constructor(container, options = {}) {
    this.container = typeof container === 'string' ? document.querySelector(container) : container;
    this.options = options;
    this.formData = options.formData || [];
    this.gridLayout = false;
    this.init();
  }

  init() {
    if (typeof this.formData === 'string') {
      this.formData = JSON.parse(this.formData);
    }

    this.render();
  }

  render() {
    this.container.innerHTML = '';
    this.container.className = 'df-renderer';
    this.container.style.position = 'relative';

    // Layout toggle button
    const toggleBtn = document.createElement('button');
    toggleBtn.textContent = '⚙️ Layout: Horizontal';
    toggleBtn.className = 'df-btn';
    toggleBtn.type = 'button';
    toggleBtn.style.marginBottom = '15px';
    toggleBtn.style.fontSize = '12px';
    toggleBtn.style.padding = '5px 10px';
    toggleBtn.onclick = () => this.toggleLayout(toggleBtn);
    this.container.appendChild(toggleBtn);

    const form = document.createElement('form');
    form.className = 'df-rendered-form';
    this.updateFormLayout(form);

    this.formData.forEach(fieldData => {
      const fieldElement = this.createField(fieldData);
      form.appendChild(fieldElement);
    });

    if (this.options.showSubmit !== false) {
      const submitWrapper = document.createElement('div');
      submitWrapper.style.gridColumn = '1 / -1';
      submitWrapper.style.marginTop = '10px';
      const submitBtn = document.createElement('button');
      submitBtn.type = 'submit';
      submitBtn.textContent = this.options.submitText || 'Submit';
      submitBtn.className = 'df-btn df-btn-primary';
      submitWrapper.appendChild(submitBtn);
      form.appendChild(submitWrapper);
    }

    form.onsubmit = (e) => {
      e.preventDefault();
      const formValues = this.getFormData();
      if (this.options.onSubmit) {
        this.options.onSubmit(formValues);
      }
      return false;
    };

    this.container.appendChild(form);
    this.form = form;
  }

  toggleLayout(btn) {
    this.gridLayout = !this.gridLayout;
    btn.textContent = this.gridLayout ? '⚙️ Layout: 2x2 Grid' : '⚙️ Layout: Horizontal';
    const form = this.container.querySelector('.df-rendered-form');
    this.updateFormLayout(form);
    this.updateFieldLayouts();
  }

  updateFormLayout(form) {
    if (this.gridLayout) {
      form.style.display = 'grid';
      form.style.gridTemplateColumns = 'repeat(2, 1fr)';
      form.style.gap = '15px';
    } else {
      form.style.display = 'block';
      form.style.gridTemplateColumns = '';
      form.style.gap = '';
    }
  }

  updateFieldLayouts() {
    const fields = this.container.querySelectorAll('.df-rendered-field');
    fields.forEach(field => {
      if (this.gridLayout) {
        field.style.display = 'block';
        field.style.gridTemplateColumns = '';
        field.style.gap = '';
      } else {
        field.style.display = 'grid';
        field.style.gridTemplateColumns = '200px 1fr';
        field.style.gap = '15px';
        field.style.alignItems = 'start';
      }
    });
  }

  createField(fieldData) {
    const wrapper = document.createElement('div');
    wrapper.className = 'df-rendered-field';
    wrapper.style.marginBottom = '15px';

    if (!this.gridLayout) {
      wrapper.style.display = 'grid';
      wrapper.style.gridTemplateColumns = '200px 1fr';
      wrapper.style.gap = '15px';
      wrapper.style.alignItems = 'start';
    }

    const fieldConfig = FIELD_REGISTRY[fieldData.type];
    if (fieldConfig && fieldConfig.renderField) {
      wrapper.innerHTML = fieldConfig.renderField(fieldData);
    } else {
      wrapper.textContent = 'Field type not supported';
    }

    return wrapper;
  }

  getFormData() {
    const formData = new FormData(this.form);
    const data = {};

    for (let [key, value] of formData.entries()) {
      if (data[key]) {
        if (Array.isArray(data[key])) {
          data[key].push(value);
        } else {
          data[key] = [data[key], value];
        }
      } else {
        data[key] = value;
      }
    }

    return data;
  }

  setData(data) {
    if (typeof data === 'string') {
      data = JSON.parse(data);
    }
    this.formData = data;
    this.render();
  }
}


// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { DynamicFormBuilder, DynamicFormRenderer, FIELD_REGISTRY };
}
