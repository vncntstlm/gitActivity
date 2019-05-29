<h1>Welcome to this Git Activity

<h2>Part One: Centralized Workflow</h2>

The goal of this exercise is to introduce you to centralized workflows.  What that entails is learning about
pulling, pushing, and dealing with merge conflicts.

You can modify any of the files
to experience and learn about git, but if you are new, we recommend starting with the three arrays in 
javascript.js.

<b>Let us begin!</b>

1. Clone the repository from https://github.com/vncntstlm/gitActivity.git
    ```text
        $ cd/home/user/gitactivity
        $ git clone <link> 
    ```
2. Make a meaningful change, we recommend making an addition to each of the arrays in javascript.js
3. Add
    1. If you only want to add one file
        ```text
            $ git add <file name>
        ```
    
    2. OR if you want to add multiple files
        ```text
            $ git add .
        ```
4. Commit
    ```text
        $ git commit -m"<a meaningful message saying what was changed>
    ```
5. Push
    ```text
        $ git push
    ```
6. Resolve merge conflicts
    1. If you are the first person to push, then the change you made will be made in the respository.  You 
    can check this by going to github.com to see what is in your repo
    <br><b>OR</b>
    
    2. If you are not the first, then you will have to resolve merge conflicts.  In the command line, you will see a message
    stating that there is a conflict and must be resolved.  When you open the file, you will see something similar to this:
        ```text
           <<<<<<< HEAD
           Foo
           =======
           Bar
           >>>>>>> 
        ```
        The next thing you want to do is to pull.
        ```text
           $ git pull       
        ```
        This will pull whatever is in the repository onto your computer and update the files accordingly.
        
        <b>Note: </b>Anything between <<<<<<<HEAD and ======= is what you currently have locally.  The things between ======= and >>>>>>> 
        is what was pulled.  You have to compare which one is the correct version (usually the one you just pulled) and change
        it so that it matches.
        
<h2>Part Two: Feature Branch Workflow</h2>

The idea of having different branches is so that each feature is on a specific branch.  The master branch is not 
supposed to have any broken code as it should be tested on on other branches.  

To make a new branch:
```text
    $ cd/home/user/gitactivity
    $ git clone <link> 
    $ git branch <branch name>
```

Change to that branch.
```text
    $ git checkout <branch name>
```

Once everything is finished, you can merge the feature branch to master.  You switch to the master branch:
```text
    $ git checkout master
```

Merge the feature branch to master:
```text
    $ git merge <branch name>
```

