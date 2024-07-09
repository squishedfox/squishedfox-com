---
title: Neovim
layout: page
permalink: /neovim/
has_children: false
---

## Helpful commands

- Create a new file using `%` and then entering in the file name
- Copy and paste from system clipboard using `set paste` and then using `ctrl` + `shift` + v

# Neovim Configuration

## init.vim

```vim
set number
set paste
syntax on
colorscheme slate

call plug#begin()
Plug 'prabirshrestha/vim-lsp'
Plug 'mattn/vim-lsp-settings'
Plug 'prabirshrestha/asyncomplete.vim'
Plug 'prabirshrestha/asyncomplete.vim'
Plug 'prabirshrestha/asyncomplete-gocode.vim'
Plug 'nvim-telescope/telescope.nvim'
Plug 'nvim-lua/plenary.nvim'
Plug 'BurntSushi/ripgrep'
Plug 'stevearc/conform.nvim'
Plug 'fatih/vim-go', { 'do': ':GoUpdateBinaries' }
call plug#end()


function! s:on_lsp_buffer_enabled() abort
    setlocal omnifunc=lsp#complete
    setlocal signcolumn=yes
    if exists('+tagfunc') | setlocal tagfunc=lsp#tagfunc | endif
    nmap <buffer> gd <plug>(lsp-definition)
    nmap <buffer> gs <plug>(lsp-document-symbol-search)
    nmap <buffer> gS <plug>(lsp-workspace-symbol-search)
    nmap <buffer> gr <plug>(lsp-references)
    nmap <buffer> gi <plug>(lsp-implementation)
    nmap <buffer> gt <plug>(lsp-type-definition)
    nmap <buffer> <leader>rn <plug>(lsp-rename)
    nmap <buffer> [g <plug>(lsp-previous-diagnostic)
    nmap <buffer> ]g <plug>(lsp-next-diagnostic)
    nmap <buffer> K <plug>(lsp-hover)

    nnoremap <buffer> <expr><c-f> lsp#scroll(+4)
    nnoremap <buffer> <expr><c-d> lsp#scroll(-4)

    inoremap <expr> <Tab>   pumvisible() ? "\<C-n>" : "\<Tab>"
    inoremap <expr> <S-Tab> pumvisible() ? "\<C-p>" : "\<S-Tab>"
    inoremap <expr> <cr>    pumvisible() ? asyncomplete#close_popup() : "\<cr>"

    let g:lsp_format_sync_timeout = 1000
    " allow modifying the completeopt variable, or it will
    " be overridden all the time
    let g:asyncomplete_auto_completeopt = 0

    set completeopt=menuone,noinsert,noselect,preview
    autocmd! BufWritePre *.rs,*.go call execute('LspDocumentFormatSync')
    autocmd! CompleteDone * if pumvisible() == 0 | pclose | endif
    " refer to doc to add more commands
endfunction

" Call the function when an LSP client attaches to a buffer
augroup lsp_install
	au!
 	autocmd User lsp_buffer_enabled call s:on_lsp_buffer_enabled()
augroup END

if executable('gopls')
    au User lsp_setup call lsp#register_server({
        \ 'name': 'gopls',
        \ 'cmd': {server_info->['gopls', '-remote=auto']},
        \ 'allowlist': ['go', 'gomod', 'gohtmltmpl', 'gotexttmpl'],
        \ })
    autocmd BufWritePre *.go
        \ call execute('LspDocumentFormatSync') |
        \ call execute('LspCodeActionSync source.organizeImports')
endif
lua <<EOF
require('init')
EOF
```

## lua/formatting.lua

```lua
-- Setup formatting for all styles

return require("conform").setup({
  formatters_by_ft = {
    lua = { "stylua" },
    -- Conform will run multiple formatters sequentially
    python = { "ruff", "isort" },
    -- Use a sub-list to run only the first available formatter
    javascript = { "prettier" },
    typescript = { "prettier" },
    go = { "gofmt", "goimports" },
    ["*"] = { "codespell" },
    ["_"] = { "trim_whitespace" },
  },
  notify_on_error = true,
  format_after_save = {
	  lsp_format = "fallback",
  }
})
```

## lua/init.lua

```lua
require('formatting')
```

