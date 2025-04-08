::Given a text file file.txt, transpose its content.

::You may assume that each row has the same number of columns, and each field is separated by the ' ' character.

::Example:

::If file.txt has the following content:

::name age
::alice 21
::ryan 30
::Output the following:

::name alice ryan
::age 21 30
# Read from the file file.txt and print its transposed content to stdout.
awk '
{
    for (i = 1; i <= NF; i++) {
        a[i] = a[i] ? a[i] " " $i : $i
    }
}
END {
    for (i = 1; i <= length(a); i++) {
        print a[i]
    }
}
' file.txt
